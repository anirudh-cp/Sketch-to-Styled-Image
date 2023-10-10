import { useState } from "react";
import GenericAPI from "../API/GenericAPI";
import { useNavigate } from "react-router-dom";


export default function useData() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const api = new GenericAPI();

    return {

        loading, 
        
        async getPrediction(style, image) {
            setLoading(true);

            const response = await api.post('api/predict', {'style': style, 'image_data_url': image})
            
            setLoading(false);

            if (response.code === -2) {
                navigate("/login");
            }

            return response;
        },

    };

}
