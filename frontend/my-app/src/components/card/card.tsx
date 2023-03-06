import React,{useState,useEffect} from 'react'
import  {ContainerCard, CardHeader, CardBody,CardFooter, SmallAvatar} from './card.style'

import axios from 'axios'
import withAuth from '../../../utils/withAuth'
import { axiosServices } from '../../../service/api'

const[posts, setPosts] = useState<any>([]);
    const[error, setError ] =useState<any>('');
    const[loading, setLoading] = useState(true);
    const token = JSON.parse(localStorage.getItem('token') || 'null');
    console.log(token);
    

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axiosServices.getData<any>("/pub", token);
            console.log(response);
            setPosts(response.data);
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);

 const StyledCard:React.FC = () => 
{
   return (

    <div>
        {posts.map(post:any =>(
        <ContainerCard key={post.id}>
            <CardHeader>
                {post.description}
            </CardHeader>
            <CardBody> {post.comment}</CardBody>
            <CardFooter>
                <div style={{display:'flex'}}>
                    <SmallAvatar/>
                    <div> </div>
                </div>
                <div>
                    <div> hashtag </div>
                </div>
            </CardFooter>
        </ContainerCard>
        ))}
        
    </div>
  );
}
export default StyledCard
