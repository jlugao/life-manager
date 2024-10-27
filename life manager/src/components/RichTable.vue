<template>
  <div>
    <Button :onclick="createTodo"> Create Item </Button>
    <DataTable
      :value="todos"
      paginator
      :rows="5"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      tableStyle="min-width: 50rem"
    >
      <Column
        :field="column.field"
        :header="column.header"
        style="width: 25%"
        v-for="column in columns"
        v-bind:key="column.id"
      ></Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/services/SupaService'

const columns = [
  { field: 'id', header: 'Id' },
  { field: 'created_at', header: 'Created At' },
  { field: 'value', header: 'Value' },
  { field: 'status', header: 'Status' },
]

async function createTodo() {
  const { data, error } = await supabase
    .from('Todo')
    .insert({ value: 'test', status: 'TODO' })
    .select()
    .single()
  if (error) {
    console.log(error)
  } else {
    todos.value.push(data)
    console.log(data)
  }
}

async function getTodos() {
  const { data, error } = await supabase
    .from('Todo')
    .select()
    .order('id', { ascending: false })
  if (error) {
    console.log(error)
  } else {
    todos.value = data
  }
}

onMounted(() => {
  getTodos()
})

const todos = ref()
</script>
