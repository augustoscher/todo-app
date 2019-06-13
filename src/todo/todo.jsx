import React from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends React.Component {
  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro"/>
        <TodoForm />
        <TodoList />
      </div>
    )
  }
}