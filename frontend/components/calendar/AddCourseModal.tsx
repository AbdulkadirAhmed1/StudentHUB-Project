// frontend/components/AddCourseModal.tsx

import React, { useState, useEffect } from 'react'
import {
  View, Text, Modal, StyleSheet, Pressable,
  TextInput, FlatList
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { BACKEND_URL } from '../../constants/api'

export interface Course {
  programCode: string
  description:  string

  // whatever you added to your Course class / JSON:
  hour:       number   // e.g. 10
  minute:     number   // e.g. 30
  professor?: string   // may be absent, so optional
  preReq:     Course[][] // an array of “OR” groups, each group an array of Course objects
}
interface Props {
  visible: boolean
  onClose: () => void
  onSelect: (course: Course) => void
}

export function AddCourseModal({ visible, onClose, onSelect }: Props) {
  const [departments, setDepartments] = useState<string[]>([])
  const [department, setDepartment]   = useState<string>('')
  const [courses, setCourses]         = useState<Course[]>([])
  const [q, setQ] = useState('')

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/departments`)
      .then(r=>r.json()).then(d=> {
        setDepartments(d.departments)

        if (d.departments.length) {
            setDepartment(d.departments[0]);
        }
    })
  }, [])

  useEffect(() => {
    if (!department) return
    fetch(`${BACKEND_URL}/api/departments/${department}/courses`)
      .then(r=>r.json()).then(d=>setCourses(d.courses as Course[]))
  }, [department])

  const filtered = courses.filter(c =>
    c.programCode.toLowerCase().includes(q.toLowerCase())
  )

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={s.overlay}>
        <View style={s.box}>
          <Picker selectedValue={department} onValueChange={setDepartment} style={s.picker}>
            {departments.map(d => <Picker.Item key={d} label={d} value={d}/>)}
          </Picker>

          <TextInput
            placeholder="Search…"
            placeholderTextColor="#666"
            style={s.search}
            value={q}
            onChangeText={setQ}
          />

          <FlatList
            data={filtered}
            keyExtractor={c=>c.programCode}
            renderItem={({item})=>(
              <Pressable onPress={()=>{ onSelect(item); onClose() }} style={s.item}>
                <Text style={s.text}>{item.programCode} – {item.description}</Text>
              </Pressable>
            )}
            ListEmptyComponent={<Text style={s.empty}>No courses</Text>}
          />

          <Pressable onPress={onClose} style={s.close}>
            <Text style={s.closeText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

const s = StyleSheet.create({
  overlay: { flex:1, backgroundColor:'rgba(0,0,0,0.5)', justifyContent:'center', alignItems:'center' },
  box: { width:'90%', maxHeight:'80%', backgroundColor:'#1E1E1E', borderRadius:12, padding:16 },
  picker: { color:'#fff', marginBottom:12 },
  search: { backgroundColor:'#2C2C2C', color:'#fff', borderRadius:8, padding:8, marginBottom:12 },
  item: { paddingVertical:10, borderBottomWidth:1, borderColor:'#2A2A2A' },
  text: { color:'#fff' },
  empty:{ color:'#666', textAlign:'center', marginTop:20 },
  close:{ marginTop:16, alignSelf:'center' },
  closeText:{ color:'#bbb' },
})
