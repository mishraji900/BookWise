"use client"
import AuthForm from '@/components/AuthForm'
import { signInSchema } from '@/lib/validations'
import React from 'react'

const page = () => {
  return (
    <AuthForm type="Sign-In" schema={signInSchema} defaultValues={{
        email: "",
        password:""
    }}
    onSubmit = {()=>{}}/>
  )
}

export default page