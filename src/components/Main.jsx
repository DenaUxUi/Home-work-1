import { useState } from 'react'
import data from '../data/db.json'
import Card from './card'

function Main() {
    const [users, setUsers] = useState(data)
    const [searchvalue, setSearchValue] = useState('')
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [avatar, setAvatar] = useState('')
    const [sortDescending, setSortDescending] = useState(false)

    function AddNewObg() {
        setUsers([...users, {
            "title": "AAAAAAAAAAA",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/954.jpg",
            "despretion": "AAAAAAAAAAA",
            "name": "AAAAAAAAAAA",
            "rate": 58,
            "id": "1"
        }])
    }

    const handleSearch = (event) => {
        setSearchValue(event.target.value);
    };

    const filteredData = users
        .filter(item =>
            item.title.toLowerCase().includes(searchvalue.toLowerCase())
        )
        .sort((a, b) => sortDescending ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name));

    function AddUser() {
        setUsers([
            {
                description: description,
                title: title,
                avatar: avatar,
                name: name,
            }, ...users])
    }

    const toggleSortOrder = () => {
        setSortDescending(prev => !prev);
    }

    return (
        <>
            <div>
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder='name' />
                <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder='title' />
                <input onChange={(e) => setDescription(e.target.value)} type="text" placeholder='description' />
                <input onChange={(e) => setAvatar(e.target.value)} type="text" placeholder='avatar' />
                <button onClick={AddUser}>Add</button>
            </div>
            <br />
            <hr />
            <input onChange={handleSearch} placeholder='Search by title' />
            <button onClick={toggleSortOrder}>Sort {sortDescending ? 'Ascending' : 'Descending'}</button>
            <section className='main'>
                {
                    filteredData.map((item) =>
                        <Card
                            key={item.id} // Adding a key prop is a good practice
                            title={item.title}
                            avatar={item.avatar}
                            despretion={item.despretion}
                            name={item.name}
                        />)
                }
                <button onClick={AddNewObg}>Add New Obg</button>
            </section>
        </>
    )
}

export default Main
