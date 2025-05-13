import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function ListCliente () {

   const [lista, setLista] = useState([]);

   useEffect(() => {
       carregarLista();
   }, [])

   function carregarLista() {

       axios.get("http://localhost:8080/api/cliente")
       .then((response) => {
           setLista(response.data)
       })
   }

  function formatarData(dataParam) {

       if (dataParam === null || dataParam === '' || dataParam === undefined) {
           return ''
       }

       let arrayData = dataParam.split('-');
       return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
   }

