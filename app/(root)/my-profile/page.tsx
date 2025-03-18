import { signOut } from '@/auth';
import BookList from '@/components/BookList';
import { Button } from '@/components/ui/button'
import { sampleBooks } from '@/constants';
import React from 'react'

const page = () => {
  return (
    <main className='flex flex-col'>
        <form action={async ()=>{
            'use server';


            await signOut();
        }} className='mb-10 w-full items-center'>
            <Button className='float-right'>Logout</Button>
        </form>
        <BookList title='Borrowed Books' books={sampleBooks}/>
    </main>
  )
}

export default page