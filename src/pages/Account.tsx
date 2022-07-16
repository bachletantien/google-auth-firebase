// interface AccountProps {}
import { useAuth } from 'context/AuthContext';
import { db } from 'config/firebase';
import { useEffect, useState } from 'react';
import {
  addDoc,
  collection,
  CollectionReference,
  getDocs,
} from 'firebase/firestore';

const Account = () => {
  const { user, logOut } = useAuth();
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState(0);
  const handleLogOut = async () => {
    await logOut();
  };

  const [authors, setAuthors] = useState<Author[]>([]);
  const authorsCollectionRef = collection(
    db,
    'author'
  ) as CollectionReference<FirebaseAuthor>;

  const createAuthor = async () => {
    await addDoc(authorsCollectionRef, { name: newName, age: newAge });
  };

  useEffect(() => {
    const getAuthor = async () => {
      const data = await getDocs(authorsCollectionRef);
      setAuthors(
        data.docs.map((doc) => {
          return { ...doc.data(), id: doc.id } as Author;
        })
      );
      console.log(data);
    };
    console.log(authors);
    getAuthor();
  }, []);
  return (
    <div>
      <h1>Accout</h1>
      <p>Welcome {user?.displayName}</p>
      <button onClick={handleLogOut}>logOut</button>
      <div>
        <input
          onChange={(e) => setNewName(e.target.value)}
          placeholder='text...'
        />
        <input
          onChange={(e) => setNewAge(Number(e.target.value))}
          type='number'
          placeholder='Age...'
        />
        <button onClick={createAuthor}>Create author</button>
        {authors.map((author) => {
          return (
            <div>
              <p>{author.name}</p>
              <p>{author.age}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Account;
