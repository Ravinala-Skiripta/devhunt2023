import React, {useState, useEffect} from 'react'
import axios from 'axios'
import withAuth from '../../utils/withAuth';
import { axiosServices } from '../../service/api'
import StyledCard from '@/components/card/card'


function Question ()  {

    const[data, setData] = useState<any>([]);
    const[error, setError ] =useState<any>('');
    const[loading, setLoading] = useState(true);
    const token = JSON.parse(localStorage.getItem('token') || 'null');
    console.log(token);
    

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axiosServices.getData<any>("/pub", token);
            console.log(response);
            setData(response);
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);

  return (
    <></>
  )
}

export default withAuth(Question)
