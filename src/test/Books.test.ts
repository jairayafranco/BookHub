import { describe, it, expect } from 'vitest';
import { newJSONBook as JSONBook } from '../config/jsonBookProps';

describe('JSONBook Test', () => {
    it('Should return an object', () => {
        expect(typeof JSONBook).toEqual('object')
    })

    it('Should return an object with the property library with a no empty array', () => {
        expect(JSONBook).toHaveProperty('library')
        expect(Array.isArray(JSONBook.library)).toBeTruthy()
        expect(JSONBook.library.length).greaterThan(0)
    })

    it('Each book should have certain properties', () => {
        JSONBook.library.forEach(book => {
            expect(book).toHaveProperty('title')
            expect(book).toHaveProperty('pages')
            expect(book).toHaveProperty('genre')
            expect(book).toHaveProperty('cover')
            expect(book).toHaveProperty('synopsis')
            expect(book).toHaveProperty('year')
            expect(book).toHaveProperty('ISBN')
            expect(book).toHaveProperty('author')
        })
    })

})