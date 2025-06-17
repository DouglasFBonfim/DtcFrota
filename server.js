const express = require('express')

const app = express()
const port = 3000

app.use(express.json())    

app.get('/status/server', (req, res) => {
  console.log("server ok")
  obj = {message: "Server encontrado"}
  res.send(obj)
})

app.get('/frentista', (req, res) => {
  setTimeout(() => {
    
  
    var obj = {};
    console.log(req.query)
    if(req.query.tag === "1BAF1AA2"){ 
      obj = {
        nome: "Jhonatan Grymuza",
        isFrentista: true
      }
    } else {
      obj = {
        nome: "NAO É FRENTISTA",
        isFrentista: false
      }
    }
    res.send(obj)
  }, 4000);
})

app.get('/veiculo', (req, res) => {
  setTimeout(() => {
  var obj = {};
  console.log(req.query)
  if(req.query.tagOuPlaca === "CB5C0FA2"){ 
    obj = {
      "idEquipamento": 1,
      "isVeiculo": true,
      "descricao": "caminhão ford Cargo",
      "placa": "987654321",
      "nFrota": "4444",
      "ultimoKm": "12455",
      "controleKm": true,
      "kmMin": "1",
      "kmMax": "1000",
      "bicosDisponiveis": [{id:1},{id:2} ],
      "semTag": "3",
     }
  } else if(req.query.tagOuPlaca === "1234"){ 
    obj = {
      "idEquipamento": 1,
      "isVeiculo": true,
      "descricao": "caminhão ford Cargo",
      "placa": "1234",
      "nFrota": "4444",
      "ultimoKm": "12455",
      "controleKm": true,
      "kmMin": "1",
      "kmMax": "1000",
      "bicosDisponiveis": [{id:1},{id:2} ],
      "semTag": "3",
     }
  } else {
    res.status = 400;
    obj = {message: "Veiculo não encontrado","isVeiculo": false,}
  }
  res.send(obj)
}, 4000);
})



app.post('/liberarAbastecimento', (req, res) => {
  setTimeout(() => {
    console.log("Liberado abastecimento")
    res.send({'idAbastecimento': 1})
}, 10000);
})


app.get('/imprimirAbastecimento', (req, res) => {
  setTimeout(() => {
  console.log(req.query.idAbastecimento)
  var obj = {
    'idEquipamento': 1,
    'nomeEmpresa': 'Jesuitas',
    'data': '2024-05-10',
    'hora': '09:54:00',
    'nomeFrentista': 'JHONATAN GRYMUZA',
    "descricaoVeiculo": "caminhão ford Cargo",
    'placa': '1234',
    'kmAtual': 87552,
    'kmAnterior': 87000, 
    'litros': 300, 
    'bico': 1,
    'precoLitros': '4.35',
    'total': 400.35, 
    'encerrante': '543456134',
    'media': 2.6,
    'finalizouAbastecimento': true
    }
  res.send(obj)
}, 4000);
})

app.get('/listaAbastecimentoParaImpressao', (req, res) => {
  setTimeout(() => {
  console.log(req.query.idAbastecimento)
  var obj = [{
     'id':1,
    'idEquipamento': 1,
    'nomeEmpresa': 'Jesuitas',
    'data': '2024-05-10',
    'hora': '09:54:00',
    'nomeFrentista': 'JHONATAN GRYMUZA',
    "descricaoVeiculo": "663-43dg VAN",
    'placa': '1234',
    'kmAtual': 87552,
    'kmAnterior': 87000, 
    'litros': 300, 
    'bico': 1,
    'precoLitros': '4.35',
    'total': 400.35, 
    'encerrante': '543456134',
    'media': 2.6,
    'finalizouAbastecimento': true
    },{
      'id':2,
      'idEquipamento': 2,
      'nomeEmpresa': 'Jesuitas',
      'data': '2024-05-10',
      'hora': '09:54:00',
      'nomeFrentista': 'JHONATAN GRYMUZA',
      "descricaoVeiculo": "CAMINHAO",
      'placa': '1234',
      'kmAtual': 87552,
      'kmAnterior': 87000, 
      'litros': 300, 
      'bico': 1,
      'precoLitros': '4.35',
      'total': 400.35, 
      'encerrante': '543456134',
      'media': 2.6,
      'finalizouAbastecimento': true
      },{
        'id':3,
        'idEquipamento': 1,
        'nomeEmpresa': 'Jesuitas',
        'data': '2024-05-10',
        'hora': '09:54:00',
        'nomeFrentista': 'JHONATAN GRYMUZA',
        "descricaoVeiculo": "ONIBUS",
        'placa': '1234',
        'kmAtual': 87552,
        'kmAnterior': 87000, 
        'litros': 300, 
        'bico': 1,
        'precoLitros': '4.35',
        'total': 400.35, 
        'encerrante': '543456134',
        'media': 2.6,
        'finalizouAbastecimento': true
        },{
          'id':4,
          'idEquipamento': 5,
          'nomeEmpresa': 'Jesuitas',
          'data': '2024-05-10',
          'hora': '09:54:00',
          'nomeFrentista': 'JHONATAN GRYMUZA',
          "descricaoVeiculo": "GUINCHO",
          'placa': '1234',
          'kmAtual': 87552,
          'kmAnterior': 87000, 
          'litros': 300, 
          'bico': 1,
          'precoLitros': '4.35',
          'total': 400.35, 
          'encerrante': '543456134',
          'media': 2.6,
          'finalizouAbastecimento': true
          },{
            'id':5,
            'idEquipamento': 1,
            'nomeEmpresa': 'Jesuitas',
            'data': '2024-05-10',
            'hora': '09:54:00',
            'nomeFrentista': 'JHONATAN GRYMUZA',
            "descricaoVeiculo": "REBOQUE",
            'placa': '1234',
            'kmAtual': 87552,
            'kmAnterior': 87000, 
            'litros': 300, 
            'bico': 1,
            'precoLitros': '4.35',
            'total': 400.35, 
            'encerrante': '543456134',
            'media': 2.6,
            'finalizouAbastecimento': true
            },{
              'id':6,
              'idEquipamento': 1,
              'nomeEmpresa': 'Jesuitas',
              'data': '2024-05-10',
              'hora': '09:54:00',
              'nomeFrentista': 'JHONATAN GRYMUZA',
              "descricaoVeiculo": "BITREM",
              'placa': '1234',
              'kmAtual': 87552,
              'kmAnterior': 87000, 
              'litros': 300, 
              'bico': 1,
              'precoLitros': '4.35',
              'total': 400.35, 
              'encerrante': '543456134',
              'media': 2.6,
              'finalizouAbastecimento': true
              },{
                'id':7,
                'idEquipamento': 1,
                'nomeEmpresa': 'Jesuitas',
                'data': '2024-05-10',
                'hora': '09:54:00',
                'nomeFrentista': 'JHONATAN GRYMUZA',
                "descricaoVeiculo": "CAMINHAO PIPA",
                'placa': '1234',
                'kmAtual': 87552,
                'kmAnterior': 87000, 
                'litros': 300, 
                'bico': 1,
                'precoLitros': '4.35',
                'total': 400.35, 
                'encerrante': '543456134',
                'media': 2.6,
                'finalizouAbastecimento': true
                },{
                  'id':8,
                  'idEquipamento': 1,
                  'nomeEmpresa': 'Jesuitas',
                  'data': '2024-05-10',
                  'hora': '09:54:00',
                  'nomeFrentista': 'JHONATAN GRYMUZA',
                  "descricaoVeiculo": "AZULEJO",
                  'placa': '1234',
                  'kmAtual': 87552,
                  'kmAnterior': 87000, 
                  'litros': 300, 
                  'bico': 1,
                  'precoLitros': '4.35',
                  'total': 400.35, 
                  'encerrante': '543456134',
                  'media': 2.6,
                  'finalizouAbastecimento': true
                  },{
                    'id':9,
                    'idEquipamento': 1,
                    'nomeEmpresa': 'Jesuitas',
                    'data': '2024-05-10',
                    'hora': '09:54:00',
                    'nomeFrentista': 'JHONATAN GRYMUZA',
                    "descricaoVeiculo": "JHONATAN",
                    'placa': '1234',
                    'kmAtual': 87552,
                    'kmAnterior': 87000, 
                    'litros': 300, 
                    'bico': 1,
                    'precoLitros': '4.35',
                    'total': 400.35, 
                    'encerrante': '543456134',
                    'media': 2.6,
                    'finalizouAbastecimento': true
                    }]
  res.send(obj)
}, 4000);
})


app.get('/enviarRecebimento', (req, res) => {
  setTimeout(() => {
  var obj = {
    'idTanque': 1,
    'quantidade': 2500,
    'tagFrentista': '1234',
   'tagRecebimento': '56789',
    }
  res.send(obj)
}, 4000);
})

app.get('/tanquesDisponiveis', (req, res) => {
  setTimeout(() => {
  var obj = [{
    'idTanque': 1,
    'nomeTanque': 'Tanque 1 frente',
    'capacidade': 5000,
    'combusitvel': 'DIESEL S500',
    },
{
    'idTanque': 2,
    'nomeTanque': 'Tanque 2 atras',
    'capacidade': 15000,
    'combusitvel': 'DIESEL S10',
    }]
  res.send(obj)
}, 4000);
})


app.post('/concluirRecebimento', (req, res) => {
  setTimeout(() => {
    console.log("Recebimento concluido")
    res.send()
}, 4000);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})