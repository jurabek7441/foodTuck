import { useState } from "react";
import "./FormStyle.css";
export let FormTable = () => {
  const [tableBollean, setTableBollean] = useState(true);
  const [inputData, setInputData] = useState({
    soni: 0,
    like: false,
    id: "",
    nomi: "",
    haqida: "",
    narxi: "",
    chegirma: "",
  });
  const [malumotlar, setMalumotlar] = useState([]);
  let inputClearFunc = () => {
    setInputData(
      {
        soni: 0,
        like: false,
        id: "",
        nomi: "",
        haqida: "",
        narxi: "",
        chegirma: "",
      }
    )
    }
  let handleTable = () => {
    setTableBollean(!tableBollean);
  };

  let handleInput = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  let handleRasm = (e) => {
    setInputData({
      ...inputData,
      rasm: URL.createObjectURL(e.target.files[0]),
    });
  };

  let sendFunc = () => {
    setMalumotlar([...malumotlar, { ...inputData, id: new Date().getTime() }]);
    setTableBollean(false);
    console.log(malumotlar);
    inputClearFunc();
  };

  let plusFunc = (item) => {
    setMalumotlar(
      malumotlar.map((obj) =>
        obj.id === item.id && obj.soni < 10
          ? { ...obj, soni: obj.soni + 1 }
          : obj
      )
    );
  };

  let minusFunc = (item) => {
    if (item.soni > 0) {
      setMalumotlar(
        malumotlar.map((obj) =>
          obj.id === item.id ? { ...obj, soni: obj.soni - 1 } : obj
        )
      );
    } else {
      alert("error");
    }
  };

  let deleteFunc = (id) => {
    setMalumotlar(malumotlar.filter((val) => val.id !== id));
  };

  return (
    <div className="formTable">
      <button
        onClick={handleTable}
        style={{ backgroundColor: tableBollean ? "red" : "blue" }}
      >
        {tableBollean ? "table" : "form"}
      </button>

      {tableBollean ? (
        <div className="form_oyna">
          <form action="">
            <input
              type="text"
              placeholder="nomi"
              name="nomi"
              onInput={handleInput}
              value={inputData?.nomi}
            />
            <input
              type="text"
              placeholder="haqida"
              name="haqida"
              onInput={handleInput}
              value={inputData?.haqida}
            />
            <input
              type="number"
              placeholder="narxi"
              name="narxi"
              onInput={handleInput}
              value={inputData?.narxi}
            />
            <input
              type="number"
              placeholder="chegirma"
              name="chegirma"
              onInput={handleInput}
              value={inputData?.chegirma}
            />
            <input type="file" onInput={handleRasm} />
            <button className="sendBtn" type="button" onClick={sendFunc}>
              send
            </button>
          </form>
        </div>
      ) : (
        <table border={1}>
          <thead>
            <tr>
              <th>#</th>
              <th>nomi</th>
              <th>haqida</th>
              <th>narxi</th>
              <th>chegirma</th>
              <th>rasmi</th>
              <th>soni</th>
              <th colSpan={2}>action</th>
            </tr>
          </thead>
          <tbody>
            {malumotlar.length > 0 ? (
              malumotlar.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.nomi}</td>
                  <td>{item.haqida}</td>
                  <td>{item.narxi}$</td>
                  <td>{item.chegirma}%</td>
                  <td>
                    <img src={item.rasm} alt="nomi" />
                  </td>
                  <td>
                    <button onClick={() => plusFunc(item)}>+</button>
                    <span>{item.soni}</span>
                    <button onClick={() => minusFunc(item)}>-</button>
                  </td>
                  <td>
                    <button onClick={() => deleteFunc(item.id)}>delete</button>
                  </td>
                  <td>
                    <button>edit</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={10}>no Data...</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};
