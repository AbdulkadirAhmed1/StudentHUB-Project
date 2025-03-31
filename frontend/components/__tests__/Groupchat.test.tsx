import GroupChatScreen from "@/app/(tabs)/groupchat";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fireEvent, render, screen, waitFor } from "@testing-library/react-native";
import React from "react";

// Mock SafeArea and gesture-handler root to avoid crashing
jest.mock("react-native-safe-area-context", () => ({
    SafeAreaView: ({ children }: any) => children,
}));

jest.mock("react-native-gesture-handler", () => {
    const View = ({ children }: any) => children;
    return {
        GestureHandlerRootView: View,
    };
});

// Mock AsyncStorage
jest.mock("@react-native-async-storage/async-storage", () => ({
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
}));

// Mock fetch globally
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve([]), // default empty response
    })
) as jest.Mock;

describe("GroupChatScreen", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders login prompt when not logged in", async () => {
        (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);

        render(<GroupChatScreen />);

        expect(
            await screen.findByText("You must be logged in to join the chat. Please log in first.")
        ).toBeTruthy();
    });

    it("displays header and chat components when logged in", async () => {
        const user = {
            id: 1,
            username: "User1234",
        };

        (AsyncStorage.getItem as jest.Mock).mockResolvedValue(JSON.stringify(user));

        render(<GroupChatScreen />);

        await waitFor(() => {
            expect(screen.getByText("Group Chat")).toBeTruthy();
        });
    });

    it("does not allow sending empty message", async () => {
        const user = {
            id: 1,
            username: "User1234",
        };

        (AsyncStorage.getItem as jest.Mock).mockResolvedValue(JSON.stringify(user));

        render(<GroupChatScreen />);

        await waitFor(() => {
            expect(screen.getByText("Send")).toBeTruthy();
            fireEvent.press(screen.getByText("Send")); // try sending empty message
        });

        // You can assert that fetch was not called
        expect(global.fetch).toHaveBeenCalledTimes(1); // Only for group/messages load
    });

    it("renders messages when fetched", async () => {
        const user = {
            id: 1,
            username: "User1234",
        };

        (AsyncStorage.getItem as jest.Mock).mockResolvedValue(JSON.stringify(user));

        // Mock group messages
        (global.fetch as jest.Mock).mockImplementation((url: string) => {
            if (url.includes("/api/chat/messages")) {
                return Promise.resolve({
                    json: () =>
                        Promise.resolve([
                            {
                                id: 1,
                                senderid: 1,
                                sendername: "User1234",
                                senderyear: "2",
                                senderprogram: "CS",
                                content: "Hello world",
                                timestamp: new Date().toISOString(),
                            },
                        ]),
                });
            }
            if (url.includes("/api/chat/groups")) {
                return Promise.resolve({
                    json: () =>
                        Promise.resolve([{ id: 1, course_code: "EECS2311", course_name: "Software Design" }]),
                });
            }
            return Promise.resolve({ json: () => Promise.resolve([]) });
        });

        render(<GroupChatScreen />);

        await waitFor(() => {
            expect(screen.getByText("Hello world")).toBeTruthy();
        });
    });
});