/**
 * @param {body} body contém as linhas do corpo da tabela
 * @param {headerRows} headerRows indica quantas linhas são consideradas como header
 * @param {widths} widths indica a quantidade de colunas
 */

 export const tableLayoutMainContent = {
  /* largura das linhas na horizontal */
  hLineWidth(i, node) {
    return 1
  },
  /* largura das linhas na vertical */
  vLineWidth(i, node) {
    return i === 0 || i === node.table.widths.length ? 1 : 0;
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
    
    return i === 0 ? 8 : 2;
  },
  paddingRight(i, node) {
    return i === (node.table.widths.length - 1) ? 8 : 0;
  },
  paddingTop(i) {
    return i === 0 ? 8 : 6;
  },
  paddingBottom(i, node) {
    return i === 0 ? 8 : 4;
  },
};
