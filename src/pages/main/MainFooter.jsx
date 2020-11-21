import Footer from '../../components/Footer';
import Icon from '../../components/Icon';
import { useEffect, useState } from 'react';
import NetworkService from '../../services/network.service';

function MainFooter({colors}) {
    const [networks, setNetworks] = useState([]);

    useEffect(() => {
        NetworkService.getAll()
            .then(response => {
                setNetworks(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    })

    return (
        <Footer
            backgroundColor = {colors.semidark}
            textColor = {colors.semilight}
            networksIcons={networks.map(net =>
                <Icon
                    image={net.iconURL}
                    url={net.pageURL}
                    size={"S"}
                    key={net.name}
                />)
            }
        />
    )
}

export default MainFooter;