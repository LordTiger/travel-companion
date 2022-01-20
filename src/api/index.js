/* eslint-disable consistent-return */
import axios from 'axios';

const url = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
    try {
        const {data: { data }} = await axios.get(url, {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: ne.lng,
                tr_latitude: ne.lat,
                tr_longitude: sw.lng,
                
              },
              headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': 'b7150133eemsh08fe34efceef827p1c740cjsn2537690c9219'
              },
            });

        return data;
    } catch (error) {
        console.log(error)
    }
}

