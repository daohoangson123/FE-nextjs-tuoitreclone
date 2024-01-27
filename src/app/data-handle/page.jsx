'use client';

import axios from 'axios';
import Link from 'next/link';
import { useEffect, useLayoutEffect, useState } from 'react';

export default function DataHandle() {
    const [userData, setUserData] = useState([]);
    const [userDataTH, setUserDataTH] = useState([]);

    function getUserList() {
        axios
            .get('http://localhost:8081/api/user-list')
            .then(function (res) {
                // console.log(res.data);
                let tableH = Object.keys(res.data[0]);
                setUserDataTH(tableH);
                setUserData(res.data);
                return res.data;
            })
            .catch(function (err) {
                // console.log(err);
            })
            .finally(function () {
                // console.log('API CAllED');
            });
    }

    function handleDelete(userId) {
        axios.post('http://localhost:8081/delete-user/:id', {
            userId: userId,
        });
        getUserList();
    }

    useEffect(() => {
        getUserList();
    }, []);

    return (
        <section className='data-handle'>
            {userData.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            {userDataTH.map((th) => (
                                <th
                                    key={th}
                                    className='border border-orange-600 p-2'>
                                    {th}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((user) => (
                            <tr key={user.id}>
                                <td className='border border-orange-600 p-2'>
                                    {user.id}
                                </td>
                                <td className='border border-orange-600 p-2'>
                                    {user.email}
                                </td>
                                <td className='border border-orange-600 p-2'>
                                    {user.name}
                                </td>
                                <td className='border border-orange-600 p-2'>
                                    {user.city}
                                </td>
                                <button onClick={() => handleDelete(user.id)}>
                                    <Link href='/data-handle'>Delete</Link>
                                </button>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div>No data</div>
            )}
        </section>
    );
}
