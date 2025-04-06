import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Button,
    Modal,
} from "react-native";

const days = ["Mon", "Tue", "Wen", "Thur", "Fri"]; // Mon - Fri

const hours = Array.from({ length: 25 }, (_, i) => `${i}:00`); // 0:00 - 24:00

type Course = {
    id?: number;
    name: string;
    day: string;
    time: string;
    professor?: string | null;
    room?: string | null;
};

type CalendarModalProps = {
    courses: Course[];
    visible: boolean;
    onClose: () => void;
};

export default function CalendarModal({ courses, visible, onClose }: CalendarModalProps) {
      const getCourseForSlot = (day: string, time: string) => {
        return courses.find((course) => {
          return course.day.trim() === day.trim() && course.time.trim().split(":")[0] === time.trim().split(":")[0];
        });
      };

    return (
        <Modal animationType="slide" transparent visible={visible} onRequestClose={onClose}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Course Calendar</Text>
                    <ScrollView horizontal>
                        <ScrollView>
                            <View>
                                {/* Header Row */}
                                <View style={styles.headerRow}>
                                    <Text style={styles.timeHeader}></Text>
                                    {days.map((day) => (
                                        <Text key={day} style={styles.dayHeader}>{day}</Text>
                                    ))}
                                </View>

                                {/* Time Slots */}
                                {hours.map((time) => (
                                    <View key={time} style={styles.row}>
                                        <Text style={styles.timeColumn}>{time}</Text>
                                        {days.map((day) => {
                                            const course = getCourseForSlot(day, time);
                                            return (
                                                <View key={day + time} style={styles.cell}>
                                                    {course && (
                                                        <Text style={styles.courseText}>{course.name}</Text>
                                                    )}
                                                </View>
                                            );
                                        })}
                                    </View>
                                ))}
                            </View>
                        </ScrollView>
                    </ScrollView>
                    <Button title="Close" onPress={onClose} />
                </View>
            </View>
        </Modal>
    );
}

const DARK_BG = "#121212";
const CARD_BG = "#1E1E1E";
const LIGHT_TEXT = "#FFFFFF";
const SUBTLE_TEXT = "#BBBBBB";
const BORDER_COLOR = "#333";
const BUTTON_BLUE = "#3A7BD5";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)", // Darker overlay
  },
  modalContent: {
    backgroundColor: CARD_BG,
    padding: 20,
    borderRadius: 10,
    width: "95%",
    height: "80%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: BORDER_COLOR,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: LIGHT_TEXT,
  },
  headerRow: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: BORDER_COLOR,
    marginBottom: 10,
  },
  timeHeader: {
    width: 60,
    textAlign: "center",
    fontWeight: "bold",
    color: LIGHT_TEXT,
  },
  dayHeader: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    paddingHorizontal: 15,
    fontSize: 16,
    minWidth: 80,
    color: LIGHT_TEXT,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  timeColumn: {
    width: 80,
    textAlign: "center",
    fontWeight: "bold",
    borderRightWidth: 1,
    borderRightColor: BORDER_COLOR,
    color: LIGHT_TEXT,
  },
  cell: {
    flex: 1,
    height: 60,
    minWidth: 100,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
  courseText: {
    fontSize: 12,
    fontWeight: "bold",
    color: LIGHT_TEXT,
    backgroundColor: BUTTON_BLUE,
    padding: 5,
    borderRadius: 5,
    minWidth: 50,
    textAlign: "center",
  },
});
