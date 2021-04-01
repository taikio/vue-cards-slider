/**
 * @param {body} body contém as linhas do corpo da tabela
 * @param {headerRows} headerRows indica quantas linhas são consideradas como header
 * @param {widths} widths indica a quantidade de colunas
 */

 export const tableLayoutSubtitle = {
  /* largura das linhas na horizontal */
  hLineWidth(i, node) {
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
    return '#236069';
  },
  /* cor das linhas na vertical */
  vLineColor(_i) {
    return '#236069';
  },
  paddingLeft(_i) {
    return 0;
  },
  paddingRight(_i, _node) {
    return 0;
  },
  paddingTop(i) {
    return 0;
  },
  paddingBottom(i, node) {
    return 8;
  },
};
