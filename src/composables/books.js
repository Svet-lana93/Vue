import { ref } from 'vue'
import http from "../http.js"
import { useRouter} from 'vue-router'

export default function useBooks() {
    const book = ref([])
    const books = ref([])

    const errors = ref([])
    const router = useRouter()

    const users = ref([])

    const getBooks = async () => {
        let response = await http.get('/api/v1/books')
        books.value = response.data.data
    }

    const createBook = async (data) => {
        errors.value = []

        try {
            await http.post('/api/v1/books', data)
            await router.push({ name: 'books.index' })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value.push(e.response.data.errors[key][0]);
                }
            }
        }
    }

    const updateBook = async (id) => {
        errors.value = []

        try {
            await http.put(`/api/v1/books/${id}`, book.value)
            await router.push({ name: 'books.details' })
        } catch (e) {
            console.log(e);
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value.push(e.response.data.errors[key][0]);
                }
            }
        }
    }

    const getBook = async (id) => {
        try {
            let response = await http.get(`/api/v1/books/${id}`)
            book.value = response.data.data
        } catch (e) {
            errors.value.push(e.message);
        }
    }

    const destroyBook = async (id) => {
        errors.value = []

        try {
            await http.delete(`/api/v1/books/${id}`)
        } catch (e) {
            errors.value.push(e.message);
        }
    }

    const getUsers = async () => {
        let response = await http.get('/api/v1/users')
        users.value = response.data.data;
    }

    return {
        errors,
        router,
        book,
        books,
        users,
        getBooks,
        destroyBook,
        createBook,
        getBook,
        getUsers,
        updateBook
    }
}
