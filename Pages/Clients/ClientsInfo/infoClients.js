import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { api, deleteInvoiceAPI } from "../../../api";
import excluir from "../../../assets/delete-icon.svg";
import edit from "../../../assets/editar.svg";
import arrows from "../../../assets/setas.svg";
import ChargesList from "../../../Components/ChargesList";
import Header from "../../../Components/Header";
import Profile from "../../../Components/Profile";
import "./infoClients.css";

function InfoClients() {

  const [divida, setDivida] = useState({});
  useEffect(() => {
    api
      .get(`/invoices/${cpf}`)
      .then((res) => {
        setDivida(res.data);
      })
      .catch((res) => {
        Swal.fire({
          icon: "error",
          title: "Ops...",
          text: "Algo deu errado!",
        });
      });
  }, []);

  // procurar dados pelo cpf
  const { cpf } = useParams();
  const [cliente, setCliente] = useState({});

  useEffect(() => {
    api
      .get(`client/${cpf}`)
      .then((res) => {
        setCliente(res.data);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo deu errado!",
        });
      });
  }, []);

  const navigate = useNavigate();
  function goTo(path) {
    navigate(path);
  }
  return (
    <div>
      <div className="Main">
        <Header />
        <div>
          <div className="clients-ahead">
            <span onClick={() => goTo("/main")}>
              <h3>Clientes</h3>
            </span>
            <div className="profile">
              <Profile />
            </div>
          </div>
          {/* dados do cliente */}
          <div className="container-sm header mt-4 mb-5">
            <div className="row justify-content-between">
              <div className="col-4 fs-4">
                <h3>Dados do cliente</h3>
              </div>
              <div
                className="col-3 btn btn-lg estilizarBtnEditarCliente"
                type="button"
              >
                <div className=" d-inline-flex gap-4">
                  <img alt="btnEditar" src={edit} />
                  Editar cliente
                </div>
              </div>
            </div>
          </div>

          <div className="container-sm">
            <div className="row row-cols-4">
              <h3>Email: </h3>
              <h3>Telefone: </h3>
              <h3>CPF: </h3>
            </div>
            <div className="row row-cols-4 mt-3">
              <span>{cliente.email}</span>
              <span>{cliente.phone}</span>
              <span>{cliente.cpf}</span>
            </div>
            <div className="row row-cols-5 mt-5">
              <h3>Endereço: </h3>
              <h3>Bairro: </h3>
              <h3>Complemento: </h3>
              <h3>CEP: </h3>
              <h3>Cidade: </h3>
            </div>
            <div className="row row-cols-5 mt-3 mb-5">
              <span>{cliente.street}</span>
              <span>{cliente.region}</span>
              <span>{cliente.complement}</span>
              <span>{cliente.cep}</span>
              <span>{cliente.city}</span>
            </div>
          </div>

          {/* barra personalizada */}
          <div className="container-sm header">
            <div className="row justify-content-between  mb-5">
              <div className="col-4 fs-4">
                <h3>Cobranças</h3>
              </div>
              <div
                className="col-3 btn btn-lg  estilizarBtnNovaCobranca"
                type="button"
              >
                <div className=" d-inline-flex gap-4">
                  {/* <img alt="AddCobranca" src={add} /> */}+ Adicionar
                  cobrança
                </div>
              </div>
            </div>

            {/* campo de cobrança na pagina do client*/}
            <div className="container-sm d-flex justify-content-between">
              <div className=" row ">
                <span>
                  <img src={arrows} alt="arrows" />
                  ID Cob.
                </span>
                <div className="col mt-5">
                  <span>{divida.id}</span>
                </div>
              </div>

              <div className=" row">
                <span>
                  <img src={arrows} alt="arrows" />
                  Data de venc.
                </span>
                <div className="col mt-5">
                  <span>{divida.duedate}</span>
                </div>
              </div>

              <div className=" row">
                <span>Valor</span>
                <div className="col mt-5">
                  <span>{divida.total}</span>
                </div>
              </div>

              <div className=" row">
                <span>Status</span>
                <div className="col mt-5">
                  <span>{divida.paidout}</span>
                </div>
              </div>

              <div className=" row">
                <span>Descrição</span>
                <div className="col mt-5">
                  <div className="d-flex justify-content-between">
                    <span>{divida.description}</span>

                    {/* btns adicionar e excluir */}

                    <img
                      src={edit}
                      alt=""
                      onClick={() =>
                        deleteInvoiceAPI(JSON.parse(ChargesList.id))
                      }
                    />

                    <img src={excluir} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoClients;
