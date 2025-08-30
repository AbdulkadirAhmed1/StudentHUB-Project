// frontend/components/AddCourseModal.tsx
import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Pressable,
  TextInput,
  FlatList,
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { BACKEND_URL } from '../../constants/api'

export interface Course {
  programCode: string
  description: string
  hour: number
  minute: number
  professor?: string
  preReq: Course[][]
}

interface Props {
  visible: boolean
  onClose: () => void
  onSelect: (course: Course) => void
}

export function AddCourseModal({ visible, onClose, onSelect }: Props) {
  const [departments, setDepartments] = useState<string[]>([])
  const [department, setDepartment] = useState<string>('placeholder')
  const [courses, setCourses] = useState<Course[]>([])
  const [q, setQ] = useState('')

  // dropdown state
  const [open, setOpen] = useState(false)
  const [items, setItems] = useState<{ label: string; value: string }[]>([])

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/departments`)
      .then((r) => r.json())
      .then((d) => {
        if (d.departments?.length) {
          const depItems = [
            { label: 'Select Department', value: 'placeholder' },
            ...d.departments.map((dep: string) => ({ label: dep, value: dep })),
          ]
          setItems(depItems)
          setDepartments(d.departments)
          setDepartment('placeholder') // start at placeholder
        }
      })
  }, [])

  useEffect(() => {
    if (!department || department === 'placeholder') {
      setCourses([])
      return
    }
    fetch(`${BACKEND_URL}/api/departments/${department}/courses`)
      .then((r) => r.json())
      .then((d) => setCourses(d.courses as Course[]))
  }, [department])

  const filtered = courses
    .filter((c) => c.programCode.toLowerCase().includes(q.toLowerCase()))
    .slice(0, 20) // max 20 courses shown

  // Reset everything when modal closes
  const handleClose = () => {
    setDepartment('placeholder')
    setCourses([])
    setQ('')
    onClose()
  }

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={s.overlay}>
        <View style={s.box}>
          <Text style={s.title}>Add Course</Text>

          <DropDownPicker
            open={open}
            value={department}
            items={items}
            setOpen={setOpen}
            setValue={(callback) => {
              const val =
                typeof callback === 'function' ? callback(department) : callback
              setDepartment(val as string)
            }}
            setItems={setItems}
            style={s.dropdown}
            dropDownContainerStyle={s.dropdownContainer}
            textStyle={
              department !== 'placeholder'
                ? s.dropdownText
                : s.placeholderText
            }
            selectedItemLabelStyle={s.dropdownSelected}
            placeholder="Select Department"
            placeholderStyle={s.placeholderText}
          />

          {/* Only show search + course list if department is chosen */}
          {department !== 'placeholder' ? (
            <>
              <TextInput
                placeholder="Search to filter courses..."
                placeholderTextColor="#888"
                style={s.search}
                value={q}
                onChangeText={setQ}
              />

              <FlatList
                data={filtered}
                keyExtractor={(c) => c.programCode}
                renderItem={({ item }) => (
                  <Pressable
                    onPress={() => {
                      onSelect(item)
                      handleClose()
                    }}
                    style={({ pressed }) => [
                      s.item,
                      pressed && { backgroundColor: '#2C2C2C' },
                    ]}
                  >
                    <Text style={s.text}>
                      <Text style={s.code}>{item.programCode}</Text> –{' '}
                      {item.description}
                    </Text>
                  </Pressable>
                )}
                ListEmptyComponent={
                  <Text style={s.empty}>No courses found</Text>
                }
              />
            </>
          ) : (
            <Text style={s.empty}>Select a department</Text>
          )}

          {/* Close Button */}
          <Pressable
            style={({ pressed }) => [
              s.closeBtn,
              pressed && { opacity: 0.8 },
            ]}
            onPress={handleClose}
          >
            <Text style={s.closeText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

const s = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '90%',
    maxHeight: '85%',
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    padding: 18,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 14,
  },

  // dropdown styles
  dropdown: {
    backgroundColor: '#2C2C2C',
    borderWidth: 0,
    borderRadius: 8,
    marginBottom: 12,
  },
  dropdownContainer: {
    backgroundColor: '#1E1E1E',
    borderWidth: 0,
  },
  dropdownText: {
    color: '#fff',
    fontSize: 15,
  },
  dropdownSelected: {
    color: '#bb86fc',
    fontWeight: '600',
  },

  search: {
    backgroundColor: '#2C2C2C',
    color: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 14,
  },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#2A2A2A',
  },
  text: { color: '#ddd', fontSize: 14, lineHeight: 20 },
  code: { color: '#bb86fc', fontWeight: '600' }, // purple highlight
  empty: {
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
    fontStyle: 'italic',
  },
  closeBtn: {
    marginTop: 18,
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 40,
    backgroundColor: '#9b59b6', // purple theme
    borderRadius: 25,
  },
  closeText: { color: '#fff', fontWeight: '600', fontSize: 15 },
  placeholderText: {
    color: '#888',
    fontSize: 15,
    fontStyle: 'italic',
  },
})