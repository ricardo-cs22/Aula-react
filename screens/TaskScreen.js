import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet,Image } from 'react-native';

const TaskScreen = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), name: task, completed: false }]);
      setTask('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const renderTask = ({ item }) => (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)} style={styles.checkbox}>
        <View style={item.completed ? styles.checkedBox : styles.uncheckedBox} />
      </TouchableOpacity>
      <Text style={item.completed ? styles.completedTaskText : styles.taskText}>{item.name}</Text>
      <TouchableOpacity onPress={() => deleteTask(item.id)} style={styles.deleteButton}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/128/6861/6861362.png' }}
        style={styles.deleteIcon} 
      />
    </TouchableOpacity>
  </View>
);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>crie e organize as suas tarefas</Text>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
        style={styles.taskList}
      />
      <TextInput
        style={styles.taskInput}
        placeholder="Insira o nome da tarefa"
        placeholderTextColor="#999"
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity onPress={addTask} style={styles.addButton}>
        <Text style={styles.addButtonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  taskList: {
    flexGrow: 0,
    marginBottom: 10,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  checkbox: {
    marginRight: 10,
  },
  uncheckedBox: {
    width: 20,
    height: 20,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 3,
  },
  checkedBox: {
    width: 20,
    height: 20,
    backgroundColor: '#6E60F9',
    borderRadius: 3,
  },
  taskText: {
    flex: 1,
    color: '#fff',
  },
  completedTaskText: {
    flex: 1,
    color: '#aaa',
    textDecorationLine: 'line-through',
  },
  deleteButton: {
    padding: 10,
  },
  deleteText: {
    color: 'red',
  },
  taskInput: {
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#6E60F9',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  deleteIcon: {
    width: 25,  
    height: 25, 
    resizeMode: 'contain', 
  },
});

export default TaskScreen;
