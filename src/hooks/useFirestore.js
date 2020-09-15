import {useState, useEffect} from 'react';
import { projectFirestore } from '../firebase/config';


const useFirestore = (collection) => {
const [docs, setDocs] = useState([]);

 useEffect(() =>{

const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
                .onSnapshot((snap) => {
                    //get a snapshot of the project in realtime 
                    let documents = [];
                    snap.forEach( doc => {
                        documents.push({...doc.data(), id: doc.id})
                    })
                    setDocs(documents);
                })

//clean up function- unsubscribe if we are not using this function
return () => unsub();

 }, [collection])

 return {docs};
}

export default useFirestore;