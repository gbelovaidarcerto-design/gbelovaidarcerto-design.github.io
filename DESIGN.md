# Sistema visual do @mentoriagb (outubro de 2026)

Vale para a página geral e, depois de aprovado, para as páginas de cada material e para as artes do Instagram. Segue a skill `frontend-design` (oficial da Anthropic).

## Assunto, público e tarefa
- **Quem escreve:** Gullit Belo, servidor público aprovado em quase vinte concursos, pai de quatro filhos.
- **Quem chega:** pessoa vinda do Instagram, no celular. Concurseiro de 20 a 45 anos que trabalha, ou pai e mãe que ensinam os filhos.
- **Tarefa da página:** em poucos segundos, achar o material certo, ver o preço e a amostra grátis, e confiar em quem escreveu.

## Conceito: a estante de estudo
Os produtos aparecem como livros de verdade numa estante: capa real, de pé, apoiada numa linha de prateleira. Tudo o que vem em volta é papel branco, tinta de caneta azul e marca-texto amarelo, os três objetos de qualquer mesa de estudo. A estante é o único elemento ousado; o resto é sóbrio.

## Cores
| Nome | Hex | Papel |
|---|---|---|
| Papel | `#FCFCFA` | fundo |
| Grafite | `#23262D` | texto |
| Lápis | `#626873` | texto secundário |
| Caneta azul | `#1F3F99` | links, botões, foco |
| Pauta | `#D6DFEA` | prateleira e divisores com função |
| Marca-texto | `#FFE14D` | só para destacar fato que decide a compra: preço, prazo, "grátis" |

As cores das capas são as de cada produto e não entram no sistema.

## Tipografia
- **Literata** (títulos e nomes de livro): fonte feita para leitura de livros. Pesos 500 e 650, tamanho óptico automático.
- **Public Sans** (texto e interface): fonte desenhada para serviço público. Pesos 400, 500 e 600.
- Escala: 15 / 17 / 20 / 26 / 34 / 46 px. Texto com no máximo 64 caracteres por linha.
- Nada em caixa-alta, nada de rótulo acima de todo título, nenhuma palavra do título destacada em outra cor ou itálico.

## Layout
Celular (390 px):
```
GB  Gullit Belo · link do perfil
Título em duas linhas
Uma frase sobre quem escreve
[Tudo] [Concursos] [Por concurso] [Filhos]      ← filtros
| capa | capa | capa | capa | capa |  ←→       ← estante, rola de lado
──────────────────────────────────────          ← prateleira
Comece sem pagar: 3 linhas com link
Quem escreve
Mentoria individual
Versículo
```
Computador: título à esquerda, estante inteira visível em cinco colunas sobre a mesma prateleira. Tudo alinhado à esquerda.

## Princípios
1. Produto real sempre: capa, página de amostra, preço exato. Nada ilustrativo inventado.
2. Estrutura só quando informa: a prateleira separa estante do resto; o marca-texto marca o que decide a compra.
3. Um movimento só: os livros sobem para a prateleira ao abrir a página. Filtro responde ao toque. Nada se mexe com `prefers-reduced-motion`.
4. Texto curto, voz ativa, botão que diz o que acontece. Revisado pela skill `redacao-humana`.
5. Piso técnico: sem rolagem lateral, foco visível, contraste AA, `alt` em toda imagem, Pixel e parâmetros `utm`/`src` preservados.
