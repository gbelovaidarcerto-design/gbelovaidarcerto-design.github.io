/*
  VAGAS DO BÔNUS "CRONOGRAMA PERSONALIZADO" (10 vagas por material).

  Quem ganha: os 10 primeiros compradores de cada material que responderem a anamnese
  do bônus e enviarem. O envio da anamnese garante a vaga. Vale também para quem comprou antes.

  Como atualizar (Gullit):
  - Cada número abaixo é o total de VAGAS RESTANTES daquele material.
  - A cada anamnese do bônus recebida de um comprador, diminua 1 no número do material dele e publique o arquivo.
  - Quando chegar a 0, a página do material mostra que as vagas do bônus se encerraram
    e deixa de prometer o bônus. Para fechar o bônus de um material antes disso, ponha 0.
  - Não mude os nomes (oab, tjpb, trt8, trt4, dpepb, 'dpepb-analista'): as páginas leem por eles.
    trt8 e trt4 contam os dois cargos juntos (uma vaga a menos por anamnese de qualquer cargo).

  Este arquivo é lido por: oab-30dias/, oab-100dias/, tjpb/, trt8/, trt4/, dpepb/, dpepb-analista/ e editais/.
*/
window.BONUS = {
  desde: '20/11/2026',
  vagas: {
    oab: 10,
    tjpb: 10,
    trt8: 10,
    trt4: 10,
    dpepb: 9,
    'dpepb-analista': 10,
    'oab-100dias': 10
  }
};
