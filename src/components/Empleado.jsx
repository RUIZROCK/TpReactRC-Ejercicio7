import { ListGroup } from "react-bootstrap";
import AvatarEmpleado from "./AvatarEmpleado";

const Empleado = ({ lista }) => {
  return (
    <>
      {lista.map((empleado) => (
        <ListGroup.Item key={empleado.id}>
          <div className="row d-flex justify-content-around">
            <div className="col-lg-2 col-md-2 col-sm-12 col-12">
              <AvatarEmpleado
                alt={empleado.fullName}
              ></AvatarEmpleado>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 col-12">
              <h2>{empleado.fullName}</h2>
              <hr />
              <p>
                {empleado.title}{" "}
                <strong className="btn btn-primary p-1">
                  {empleado.department}
                </strong>
              </p>
            </div>
          </div>
        </ListGroup.Item>
      ))}
    </>
  );
};

export default Empleado;
