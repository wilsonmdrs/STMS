import { useMutation, useQueryClient } from "react-query";
import { api } from "../api";
import { toast } from 'react-toastify';
import { AxiosError, AxiosResponse } from "axios";
interface useTagClientReturn {
    onAdd(tag:{label:string}):void
    onEdit(tag:{id:string, label:string}):void
    onDelete(id:string):void
}

export const useTagClient = ():useTagClientReturn => {
    const queryClient = useQueryClient()
    
    const { mutate:fetchAdd } = useMutation({ 
        mutationFn: api.post, 
        onSuccess: onSuccess,
        onError:onError
    });
    const { mutate:fetchEdit } = useMutation({ 
        mutationFn: api.put, 
        onSuccess: onSuccess,
        onError:onError
    });
    const { mutate:fetchDelete } = useMutation({ 
        mutationFn: api.delete, 
        onSuccess: onSuccess,
        onError:onError
    });
    
    function onError({response}:AxiosError){
        if (response && 'data' in response) {
            toast.error(`${response?.data}`)
            queryClient.invalidateQueries({queryKey:["getAll"]})
        }
    }

    function onSuccess(response:AxiosResponse){
        if (response.status === 200) {
            toast.success(response.data)
        }
        queryClient.invalidateQueries({queryKey:["getAll"]})
        queryClient.invalidateQueries({queryKey:["getRecent"]})
    }
    
    function onAdd(tag:{label:string}) {
        fetchAdd(tag)
    }

    function onEdit(tag:{id:string, label:string}) {
       fetchEdit(tag)
    }

    function onDelete(id:string) {
        fetchDelete(id)
        queryClient.clear()
    }

    return { onAdd, onEdit, onDelete }
}