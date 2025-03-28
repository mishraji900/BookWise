import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import BookCover from './BookCover'
const BookOverview = ({
  title,
  author,
  genre,
  rating,
  totalCopies,
  availableCopies,
  description,
  coverColor,
  coverUrl}: Book) => {
  return (
    <section className=' book-overview'>
        <div className="flex flex-1 flex-col gap-5">
            <h1>{title}</h1>

            <div className="book-info">
              <p>
                By <span className="font-semibold text-light-200">{author}</span>
              </p>
              <p>
                Geren{" "}<span className="font-semibold text-light-200">{genre}</span>
              </p>

              <div className="flex flex-row gap-1">
                <Image src="/icons/star.svg" alt="star" width={22} height={22}/>
                <p>{rating}</p>
              </div>
            </div>
            <div className="book-copies">
              <p>
                Total Books: <span>{totalCopies}</span>
              </p>
              <p>
                Avaliable Books: <span>{availableCopies}</span>
              </p>
            </div>
            <p className="book-description">{description}</p>
            <Button className='book-overview_btn'>
              <Image src="/icons/book.svg" alt="book" height={20} width={20}/>
              <p className=' font-bebas-neue text-xl uppercase text-dark-100'>Borrow Book request</p>
            </Button>
        </div>

        <div className="relative flex flex-1">
          <BookCover 
            varient = "wide"
            className = 'z-10'
            coverColor = {coverColor}
            coverUrl = {coverUrl}
          />

          <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
            <BookCover 
              varient = "wide"
              coverColor = {coverColor}
              coverUrl = {coverUrl}
            />
          </div>
        </div>
    </section>
  )
}

export default BookOverview