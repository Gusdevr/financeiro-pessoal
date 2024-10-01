

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  ContainerMain,
  TransactionList,
  TransactionItem,
  TotalBalance,
  Header,
  Nav,
  TransactionForm,
  Input,
  Select,
  Button,
  DeleteButton,
} from './styles'

const Home = () => {
  const [transactions, setTransactions] = useState([])
  const [totalBalance, setTotalBalance] = useState(0)
  const [formData, setFormData] = useState({ description: '', value: '', type: 'entrada' })


  const fetchTransactions = async () => {
    try {
      const response = await axios.get('http://localhost:3000/transactions/all');
      setTransactions(response.data);
    } catch (error) {
      console.error('Erro ao buscar transações:', error)
    }
  }


  const fetchTotalBalance = async () => {
    try {
      const response = await axios.get('http://localhost:3000/transactions/balance');
      setTotalBalance(response.data.total);
    } catch (error) {
      console.error('Erro ao buscar o saldo total:', error)
    }
  }


  const addTransaction = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3000/transactions/add', formData)
      setFormData({ description: '', value: '', type: 'entrada' })
      fetchTransactions()
      fetchTotalBalance()
    } catch (error) {
      console.error('Erro ao adicionar transação:', error)
    }
  }


  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/transactions/${id}`)
      fetchTransactions()
      fetchTotalBalance()
    } catch (error) {
      console.error('Erro ao deletar transação:', error)
    }
  }


  useEffect(() => {
    fetchTransactions()
    fetchTotalBalance()
  }, [])

  return (
    <>
    
      <Header>
        <h1>Meu Sistema Financeiro</h1>
        <Nav>
          <a href="/">Home</a>
          <a href="/about">Sobre</a>
        </Nav>
      </Header>

   
      <ContainerMain>
        <h1>Sistema Financeiro Pessoal</h1>

    
        <TransactionForm onSubmit={addTransaction}>
          <h2>Adicionar Nova Transação</h2>
          <Input
            type="text"
            placeholder="Descrição"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          />
          <Input
            type="number"
            placeholder="Valor"
            value={formData.value}
            onChange={(e) => setFormData({ ...formData, value: e.target.value })}
            required
          />
          <Select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </Select>
          <Button type="submit">Adicionar</Button>
        </TransactionForm>

      
        <TotalBalance>
          <h2>Saldo Total: R$ {totalBalance.toFixed(2)}</h2>
        </TotalBalance>

     
        <TransactionList>
          {transactions.length === 0 ? (
            <p>Nenhuma transação encontrada</p>
          ) : (
            transactions.map((transaction) => (
              <TransactionItem key={transaction.id} type={transaction.type}>
                <p><strong>Descrição:</strong> {transaction.description}</p>
                <p><strong>Valor:</strong> R$ {transaction.value.toFixed(2)}</p>
                <p><strong>Tipo:</strong> {transaction.type}</p>
             
                <DeleteButton onClick={() => deleteTransaction(transaction.id)}>Deletar</DeleteButton>
              </TransactionItem>
            ))
          )}
        </TransactionList>
      </ContainerMain>
    </>
  )
}

export default Home
