import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import style from "./ConsolPanel.module.scss";
import ConsolCard from "../../Components/Card/ConsolCard/ConsolCard";
import axios from "axios";
import { useFormik } from "formik";

const ConsolPanel = () => {
  const [product, setProduct] = useState([]);

  const getData = () => {
    axios
      .get("https://664b3125a300e8795d448fab.mockapi.io/basket")
      .then((res) => {
        setProduct(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteConsol = (id) => {
    axios.delete(`https://664b3125a300e8795d448fab.mockapi.io/basket/${id}`);
    setTimeout(() => {
      getData();
    }, 300);
  };

  const formik = useFormik({
    initialValues: {
      thumbnail: "",
      title: "",
      description: "",
      price: "",
    },

    onSubmit: (values, { resetForm }) => {
      axios.post(`https://664b3125a300e8795d448fab.mockapi.io/basket`, values);
      setTimeout(() => {
        getData();
      }, 2000);
      resetForm({
        thumbnail: "",
        title: "",
        description: "",
        price: "",
      });
    },
  });

  const [sortType, setSortType] = useState(null);

  const handleSort = (type) => {
    setSortType(type);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = product.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (sortType) {
      setProduct((prevData) =>
        [...prevData].sort((a, b) => {
          if (sortType === "asc") {
            return a.title.localeCompare(b.title);
          } else {
            return b.title.localeCompare(a.title);
          }
        })
      );
    }
  }, [sortType]);

  return (
    <div>
      <Header />
      <div className={style.search}>
        <div className={style.container}>
          <button onClick={() => handleSort("asc")}>A-Z</button>
          <button onClick={() => handleSort("desc")}>Z-A</button>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className={style.cards}>
        <div className={style.container}>
          {filteredData &&
            filteredData.map((item) => (
              <ConsolCard
                key={item.id}
                item={item}
                Delete={() => deleteConsol(item.id)}
              />
            ))}
        </div>
      </div>
      <div className={style.cards}>
        <div className={style.container}>
          {product &&
            product.map((item) => (
              <ConsolCard item={item} Delete={() => deleteConsol(item.id)} />
            ))}
        </div>
      </div>
      <div className={style.update}>
        <div className={style.container}>
          <form onSubmit={formik.handleSubmit}>
            <input
              name="thumbnail"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.thumbnail}
              placeholder="Image"
            />
            <input
              name="title"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.title}
              placeholder="title"
            />
            <input
              name="description"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.description}
              placeholder="description"
            />
            <input
              name="price"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.price}
              placeholder="price"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConsolPanel;
