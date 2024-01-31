import icono from '../assets/iconUser.png'
const AvatarEmpleado = ({alte}) => {
    return (
        <div>
            <img src={icono} alt={alte} className="img-fluid imgUser"/>
        </div>
    );
};

export default AvatarEmpleado;