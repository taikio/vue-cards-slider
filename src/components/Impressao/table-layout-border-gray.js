/**
 * @param {body} body contém as linhas do corpo da tabela
 * @param {headerRows} headerRows indica quantas linhas são consideradas como header
 * @param {widths} widths indica a quantidade de colunas
 */

 export const tableLayoutBorderGray = {
  /* largura das linhas na horizontal */
  hLineWidth(i, node) {
    // if (i === 0 || i === (node.table.widths.length - 1)) {
    //   console.log('line width - i', i)

    //   return 1;
    // }
    return 1;
  },
  /* largura das linhas na vertical */
  vLineWidth(i, node) {
    // if (i === 0 || i === node.table.body.length - 1) {
    //   return 1;
    // }
    return 1;
  },
  /* cor das linhas na horizontal */
  hLineColor(i) {
    return '#B8BECE';
  },
  /* cor das linhas na vertical */
  vLineColor(_i) {
    return '#B8BECE';
  },
  paddingLeft(i) {
    return 8;
  },
  paddingRight(i, node) {
    return 8;
  },
  paddingTop(i) {
    return i === 0 ? 8 : 2;
  },
  paddingBottom(i, node) {
    return i === node.table.body.length - 1 ? 8 : 0;
  },
};
