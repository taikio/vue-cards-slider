
export default class Impressao {

  constructor (dadosParaImpressao, logoEgov, iconDownload, iconSucess, iconFail) {
    this.dadosParaImpressao = dadosParaImpressao
    this.logoEgov = logoEgov
    this.iconDownload = iconDownload
    this.iconSucess = iconSucess
    this.iconFail = iconFail
  }

  async PreparaDocumento () {
    const corpoDocumento = this.CriaCorpoDocumento()
    const pdf = this.GerarDocumento(corpoDocumento)
    return pdf
  }

  CriaCorpoDocumento () {
    let page = []

    /* table - titulo relatorio */
    page.push({
      margin: [0, 0, 0, 0],
      layout: 'noBorders',
      table: {
        widths: ['50%', '50%'],
        body: [                             
          [
            { text: 'Saída Agrotóxico', color: '#236069', fontSize: 14, alignment: 'left' },
            {
              text: 'Gerar Log CSV',
              link: 'https://www.google.com',
              color: '#1A73DA',
              fontSize: 12,
              alignment: 'right',
              decoration: 'underline'
            }
          ]              
        ],
      },
    })

    const tableInformacoes = {
      margin: [0, 0, 8, 0],
      layout: 'tableBorderedGray',
      table: {
        widths: ['50%', '50%'],
        body: [                             
          [
            {
              text: 'Informações do Relatório',
              color: '#236069',
              fontSize: 12,
              alignment: 'left',
              colSpan: 2,
              border: [true, true, true, false],
            },
            {}
          ],
          [
            {
              text: 'Obrigação',
              fontSize: 8,
              border: [true, false, false, false],
              margin: [0, 6, 0, 0]
            },
            {
              text: 'CNPJ da Organização',
              fontSize: 8,
              border: [false, false, true, false],
              margin: [0, 6, 0, 0]
            }
          ],
          [
            {
              text: 'Livro Caixa Digital - LCDPR',
              fontSize: 10,
              border: [true, false, false, false],
            },
            {
              text: '01.234.567/8901-23',
              fontSize: 10,
              border: [false, false, true, false],
            }
          ],
          [
            {
              text: 'Organização',
              fontSize: 8,
              border: [true, false, false, false],
              margin: [0, 6, 0, 0]
            },
            {
              text: 'Período',
              fontSize: 8,
              border: [false, false, true, false],
              margin: [0, 6, 0, 0]
            }
          ],
          [
            {
              text: 'Organização LTDA - Matriz',
              fontSize: 10,
              border: [true, false, false, true],
            },
            {
              text: 'De 01/01/2021 à 31/03/2021',
              fontSize: 10,
              border: [false, false, true, true],
            }
          ]            
        ],
      },
    }

    const tableTotalizadoresSucesso = {
      margin: [0, 4, 0, 0],
      border: [true, false, true, false],
      layout: 'noBorders',
      table: {
        widths: ['70%', '30%'],
        body: [                             
          [
            { image: this.iconSucess, height: 30, width: 50, margin: [0, 0, 0, 0] },
            {
              text: '31',
              fontSize: 23,
              alignment: 'right',
              color: '#009533',
              margin: [0, 0, 0, 0]
            }
          ],
          [
            { text: 'Sucesso', fontSize: 9, alignment: 'right', colSpan: 2},
            {}
          ]              
        ],
      },
    }

    const tableTotalizadoresFalha = {
      margin: [0, 4, 0, 0],
      border: [false, false, true, false],
      layout: 'noBorders',
      table: {
        widths: ['70%', '30%'],
        body: [                             
          [
            { image: this.iconFail, height: 30, width: 50, margin: [0, 0, 0, 0] },
            {
              text: '54',
              fontSize: 23,
              alignment: 'right',
              color: '#E73434',
              margin: [0, 0, 0, 0]
            }
          ],
          [
            { text: 'Falha', fontSize: 9, alignment: 'right', colSpan: 2},
            {}
          ]            
        ],
      },
    }

    const tableTotalizadores = {
      margin: [8, 0, 0, 0],
      layout: 'tableBorderedGray',
      table: {
        widths: ['50%', '50%'],
        body: [                             
          [
            {
              text: 'Totalizadores',
              color: '#236069',
              fontSize: 12,
              alignment: 'left',
              colSpan: 2,
              border: [true, true, true, false],
            },
            {}
          ],
          [
            tableTotalizadoresSucesso,
            tableTotalizadoresFalha
          ],
          [
            {
              text: '',
              fontSize: 12,
              border: [true, false, true, true],
              margin: [0, 7, 0, 0],
              colSpan: 2
            },
            {}
          ]
        ],
      },
    }

    /* table - resumo do relatorio */
    page.push({
      margin: [0, 10, 0, 0],
      layout: 'noBorders',
      table: {
        widths: ['50%', '50%'],
        body: [                             
          [
            tableInformacoes,
            tableTotalizadores
          ]              
        ],
      },
    })

    /* table - título do retorno de processamentos */
    page.push({
      margin: [0, 10, 0, 0],
      layout: 'tableSubtitle',
      table: {
        widths: ['100%'],
        body: [                             
          [
            {
              text: 'Retorno(s)',
              fontSize: 12,
              color: '#236069',
              border: [false, false, false, true],
            }
          ]              
        ],
      },
    })

    /* ==== inicio: Construindo a listagem de retornos ==== */
    const header = [
      { text: 'Codigo', bold: true, fontSize: 10, margin: [0, 4, 0, 0], fillColor: '#F5F5F5' },
      { text: 'Titulo', bold: true, fontSize: 10, margin: [0, 4, 0, 0], fillColor: '#F5F5F5' },
      { text: 'Descrição', bold: true, fontSize: 10, margin: [0, 4, 0, 0], fillColor: '#F5F5F5' },
      { text: 'Status', bold: true, fontSize: 10, margin: [0, 4, 0, 0], fillColor: '#F5F5F5' },
      { text: 'Link', bold: true, fontSize: 10, margin: [0, 4, 0, 0], fillColor: '#F5F5F5' },
    ];

    const tableContent = []
    
    tableContent.push(header)
    
    for (const [index, item] of this.dadosParaImpressao.entries()) {
      tableContent.push([
        { text: item.id, fontSize: 10 },
        { text: item.title, fontSize: 10 },
        { text: item.description, fontSize: 10 },
        { text: index < 3 ? 'Falha' : 'Sucesso', fontSize: 10, color: index < 3 ? '#C62222' : '#006322' },
        { image: this.iconDownload, height: 19, width: 19, link: 'https://www.google.com/' }
      ])
    }

    /* table - listagem de processamentos */
    page.push({
      margin: [0, 12, 0, 0],
      layout: 'tableMainContent',
      table: {              
        headerRows: 1,
        widths: [ 40, 80, '*', 80, 40 ],
        body: tableContent
      }
    })
    /* ==== fim: Construindo a listagem de retornos ==== */

    return page;
  }

  GerarDocumento(_corpoDocumento) {
    const logo = this.logoEgov

    const documento = {
      pageSize: 'A4',
      pageOrientation: 'landscape',
      pageMargins: [14, 50, 14, 0],
      header: function (currentPage, pageCount) {
        return {
            margin: [12, 12, 12, 0],
            layout: 'noBorders',
            table: {
              widths: [80, '*', 80],
              body: [                             
                [
                  { image: logo, height: 20, width: 100, fillColor: '#1A73DA', margin: [4, 0, 0, 0] },
                  { text: 'Obrigação: Livro Caixa Digital - LCDPR          Relatório: Saída Agrotóxico', style: 'reportName', fillColor: '#1A73DA' },
                  { text: `Página ${currentPage} de ${pageCount}`, style: 'pageCounter', fillColor: '#1A73DA' }
                ]              
              ],
            },
          };
      },
      content: _corpoDocumento,
      footer(_currentPage, _pageCount) {
        return {};
      },
      defaultStyle: {
        color: '#4B4B4B'
      },
      styles: {
        reportName: {
          fontSize: 11,
          bold: true,
          alignment: 'center',
          color: '#fff',
          margin: [0, 4, 0, 0],
        },
        pageCounter: {
          fontSize: 11,
          bold: true,
          alignment: 'right',
          color: '#fff',
          margin: [0, 4, 4, 0],
        }
      },
    };

    return documento;
  }
}