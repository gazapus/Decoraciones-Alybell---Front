import Footer from '../../components/Footer';
import Icon from '../../components/Icon';
import { useEffect, useState } from 'react';
import NetworkService from '../../services/network.service';

function MainFooter() {
    const [networks, setNetworks] = useState([]);

    useEffect(() => {
        NetworkService.getAll()
            .then(response => {
                setNetworks(response.data);
            })
            .catch(err => {
                console.log(err.response.data.message);
            })
    })

    return (
        <Footer
            networksIcons={networks.map(net =>
                <Icon
                    image={net.iconURL}
                    url={net.pageURL}
                    size={"XS"}
                    key={net.name}
                />)
            }
        />
    )
}

export default MainFooter;