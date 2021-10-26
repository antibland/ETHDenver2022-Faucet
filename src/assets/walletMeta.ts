interface Props {
  [key: string]: {
    uri: string;
    description?: string;
  };
}

export const walletMeta: Props = {
  metamask: {
    uri: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjM1NSIgdmlld0JveD0iMCAwIDM5NyAzNTUiIHdpZHRoPSIzOTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtMSkiPjxwYXRoIGQ9Im0xMTQuNjIyNjQ0IDMyNy4xOTU0NzIgNTIuMDA0NzE3IDEzLjgxMDE5OHYtMTguMDU5NDlsNC4yNDUyODMtNC4yNDkyOTJoMjkuNzE2OTgydjIxLjI0NjQ1OSAxNC44NzI1MjNoLTMxLjgzOTYyNGwtMzkuMjY4ODY4LTE2Ljk5NzE2OXoiIGZpbGw9IiNjZGJkYjIiLz48cGF0aCBkPSJtMTk5LjUyODMwNSAzMjcuMTk1NDcyIDUwLjk0MzM5NyAxMy44MTAxOTh2LTE4LjA1OTQ5bDQuMjQ1MjgzLTQuMjQ5MjkyaDI5LjcxNjk4MXYyMS4yNDY0NTkgMTQuODcyNTIzaC0zMS44Mzk2MjNsLTM5LjI2ODg2OC0xNi45OTcxNjl6IiBmaWxsPSIjY2RiZGIyIiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA0ODMuOTYyMjcgMCkiLz48cGF0aCBkPSJtMTcwLjg3MjY0NCAyODcuODg5NTIzLTQuMjQ1MjgzIDM1LjA1NjY1NyA1LjMwNjYwNC00LjI0OTI5Mmg1NS4xODg2OGw2LjM2NzkyNSA0LjI0OTI5Mi00LjI0NTI4NC0zNS4wNTY2NTctOC40OTA1NjUtNS4zMTE2MTUtNDIuNDUyODMyIDEuMDYyMzIzeiIgZmlsbD0iIzM5MzkzOSIvPjxwYXRoIGQ9Im0xNDIuMjE2OTg0IDUwLjk5MTUwMjIgMjUuNDcxNjk4IDU5LjQ5MDA4NTggMTEuNjc0NTI4IDE3My4xNTg2NDNoNDEuMzkxNTExbDEyLjczNTg0OS0xNzMuMTU4NjQzIDIzLjM0OTA1Ni01OS40OTAwODU4eiIgZmlsbD0iI2Y4OWMzNSIvPjxwYXRoIGQ9Im0zMC43NzgzMDIzIDE4MS42NTcyMjYtMjkuNzE2OTgxNTMgODYuMDQ4MTYxIDc0LjI5MjQ1MzkzLTQuMjQ5MjkzaDQ3Ljc1OTQzNDN2LTM3LjE4MTMwM2wtMi4xMjI2NDEtNzYuNDg3MjUzLTEwLjYxMzIwOCA4LjQ5ODU4M3oiIGZpbGw9IiNmODlkMzUiLz48cGF0aCBkPSJtODcuMDI4MzAzMiAxOTEuMjE4MTM0IDg3LjAyODMwMjggMi4xMjQ2NDYtOS41NTE4ODYgNDQuNjE3NTYzLTQxLjM5MTUxMS0xMC42MjMyMjl6IiBmaWxsPSIjZDg3YzMwIi8+PHBhdGggZD0ibTg3LjAyODMwMzIgMTkyLjI4MDQ1NyAzNi4wODQ5MDU4IDMzLjk5NDMzNHYzMy45OTQzMzR6IiBmaWxsPSIjZWE4ZDNhIi8+PHBhdGggZD0ibTEyMy4xMTMyMDkgMjI3LjMzNzExNCA0Mi40NTI4MzEgMTAuNjIzMjI5IDEzLjc5NzE3IDQ1LjY3OTg4OC05LjU1MTg4NiA1LjMxMTYxNS00Ni42OTgxMTUtMjcuNjIwMzk4eiIgZmlsbD0iI2Y4OWQzNSIvPjxwYXRoIGQ9Im0xMjMuMTEzMjA5IDI2MS4zMzE0NDgtOC40OTA1NjUgNjUuODY0MDI0IDU2LjI1LTM5LjMwNTk0OXoiIGZpbGw9IiNlYjhmMzUiLz48cGF0aCBkPSJtMTc0LjA1NjYwNiAxOTMuMzQyNzggNS4zMDY2MDQgOTAuMjk3NDUxLTE1LjkxOTgxMi00Ni4yMTEwNDl6IiBmaWxsPSIjZWE4ZTNhIi8+PHBhdGggZD0ibTc0LjI5MjQ1MzkgMjYyLjM5Mzc3MSA0OC44MjA3NTUxLTEuMDYyMzIzLTguNDkwNTY1IDY1Ljg2NDAyNHoiIGZpbGw9IiNkODdjMzAiLz48cGF0aCBkPSJtMjQuNDEwMzc3NyAzNTUuODc4MTkzIDkwLjIxMjI2NjMtMjguNjgyNzIxLTQwLjMzMDE5MDEtNjQuODAxNzAxLTczLjIzMTEzMzEzIDUuMzExNjE2eiIgZmlsbD0iI2ViOGYzNSIvPjxwYXRoIGQ9Im0xNjcuNjg4NjgyIDExMC40ODE1ODgtNDUuNjM2NzkzIDM4LjI0MzYyNy0zNS4wMjM1ODU4IDQyLjQ5MjkxOSA4Ny4wMjgzMDI4IDMuMTg2OTY5eiIgZmlsbD0iI2U4ODIxZSIvPjxwYXRoIGQ9Im0xMTQuNjIyNjQ0IDMyNy4xOTU0NzIgNTYuMjUtMzkuMzA1OTQ5LTQuMjQ1MjgzIDMzLjk5NDMzNHYxOS4xMjE4MTNsLTM4LjIwNzU0OC03LjQzNjI2eiIgZmlsbD0iI2RmY2VjMyIvPjxwYXRoIGQ9Im0yMjkuMjQ1Mjg2IDMyNy4xOTU0NzIgNTUuMTg4NjgtMzkuMzA1OTQ5LTQuMjQ1MjgzIDMzLjk5NDMzNHYxOS4xMjE4MTNsLTM4LjIwNzU0OC03LjQzNjI2eiIgZmlsbD0iI2RmY2VjMyIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgNTEzLjY3OTI1MiAwKSIvPjxwYXRoIGQ9Im0xMzIuNjY1MDk2IDIxMi40NjQ1OTMtMTEuNjc0NTI4IDI0LjQzMzQyNyA0MS4zOTE1MS0xMC42MjMyMjl6IiBmaWxsPSIjMzkzOTM5IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAyODMuMzcyNjQ2IDApIi8+PHBhdGggZD0ibTIzLjM0OTA1NyAxLjA2MjMyMjk2IDE0NC4zMzk2MjUgMTA5LjQxOTI2NTA0LTI0LjQxMDM3OC01OS40OTAwODU4eiIgZmlsbD0iI2U4OGYzNSIvPjxwYXRoIGQ9Im0yMy4zNDkwNTcgMS4wNjIzMjI5Ni0xOS4xMDM3NzM5MiA1OC40Mjc3NjI5NCAxMC42MTMyMDc3MiA2My43MzkzNzgxLTcuNDI5MjQ1NDEgNC4yNDkyOTIgMTAuNjEzMjA3NzEgOS41NjA5MDYtOC40OTA1NjYxNyA3LjQzNjI2MSAxMS42NzQ1Mjg0NyAxMC42MjMyMjktNy40MjkyNDU0IDYuMzczOTM4IDE2Ljk4MTEzMjMgMjEuMjQ2NDU5IDc5LjU5OTA1NzctMjQuNDMzNDI4YzM4LjkxNTA5Ni0zMS4xNjE0NzMgNTguMDE4ODY5LTQ3LjA5NjMxOCA1Ny4zMTEzMjItNDcuODA0NTMzLS43MDc1NDgtLjcwODIxNS00OC44MjA3NTYtMzcuMTgxMzAzNi0xNDQuMzM5NjI1LTEwOS40MTkyNjUwNHoiIGZpbGw9IiM4ZTVhMzAiLz48ZyB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAzOTkuMDU2NjExIDApIj48cGF0aCBkPSJtMzAuNzc4MzAyMyAxODEuNjU3MjI2LTI5LjcxNjk4MTUzIDg2LjA0ODE2MSA3NC4yOTI0NTM5My00LjI0OTI5M2g0Ny43NTk0MzQzdi0zNy4xODEzMDNsLTIuMTIyNjQxLTc2LjQ4NzI1My0xMC42MTMyMDggOC40OTg1ODN6IiBmaWxsPSIjZjg5ZDM1Ii8+PHBhdGggZD0ibTg3LjAyODMwMzIgMTkxLjIxODEzNCA4Ny4wMjgzMDI4IDIuMTI0NjQ2LTkuNTUxODg2IDQ0LjYxNzU2My00MS4zOTE1MTEtMTAuNjIzMjI5eiIgZmlsbD0iI2Q4N2MzMCIvPjxwYXRoIGQ9Im04Ny4wMjgzMDMyIDE5Mi4yODA0NTcgMzYuMDg0OTA1OCAzMy45OTQzMzR2MzMuOTk0MzM0eiIgZmlsbD0iI2VhOGQzYSIvPjxwYXRoIGQ9Im0xMjMuMTEzMjA5IDIyNy4zMzcxMTQgNDIuNDUyODMxIDEwLjYyMzIyOSAxMy43OTcxNyA0NS42Nzk4ODgtOS41NTE4ODYgNS4zMTE2MTUtNDYuNjk4MTE1LTI3LjYyMDM5OHoiIGZpbGw9IiNmODlkMzUiLz48cGF0aCBkPSJtMTIzLjExMzIwOSAyNjEuMzMxNDQ4LTguNDkwNTY1IDY1Ljg2NDAyNCA1NS4xODg2OC0zOC4yNDM2MjZ6IiBmaWxsPSIjZWI4ZjM1Ii8+PHBhdGggZD0ibTE3NC4wNTY2MDYgMTkzLjM0Mjc4IDUuMzA2NjA0IDkwLjI5NzQ1MS0xNS45MTk4MTItNDYuMjExMDQ5eiIgZmlsbD0iI2VhOGUzYSIvPjxwYXRoIGQ9Im03NC4yOTI0NTM5IDI2Mi4zOTM3NzEgNDguODIwNzU1MS0xLjA2MjMyMy04LjQ5MDU2NSA2NS44NjQwMjR6IiBmaWxsPSIjZDg3YzMwIi8+PHBhdGggZD0ibTI0LjQxMDM3NzcgMzU1Ljg3ODE5MyA5MC4yMTIyNjYzLTI4LjY4MjcyMS00MC4zMzAxOTAxLTY0LjgwMTcwMS03My4yMzExMzMxMyA1LjMxMTYxNnoiIGZpbGw9IiNlYjhmMzUiLz48cGF0aCBkPSJtMTY3LjY4ODY4MiAxMTAuNDgxNTg4LTQ1LjYzNjc5MyAzOC4yNDM2MjctMzUuMDIzNTg1OCA0Mi40OTI5MTkgODcuMDI4MzAyOCAzLjE4Njk2OXoiIGZpbGw9IiNlODgyMWUiLz48cGF0aCBkPSJtMTMyLjY2NTA5NiAyMTIuNDY0NTkzLTExLjY3NDUyOCAyNC40MzM0MjcgNDEuMzkxNTEtMTAuNjIzMjI5eiIgZmlsbD0iIzM5MzkzOSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjgzLjM3MjY0NiAwKSIvPjxwYXRoIGQ9Im0yMy4zNDkwNTcgMS4wNjIzMjI5NiAxNDQuMzM5NjI1IDEwOS40MTkyNjUwNC0yNC40MTAzNzgtNTkuNDkwMDg1OHoiIGZpbGw9IiNlODhmMzUiLz48cGF0aCBkPSJtMjMuMzQ5MDU3IDEuMDYyMzIyOTYtMTkuMTAzNzczOTIgNTguNDI3NzYyOTQgMTAuNjEzMjA3NzIgNjMuNzM5Mzc4MS03LjQyOTI0NTQxIDQuMjQ5MjkyIDEwLjYxMzIwNzcxIDkuNTYwOTA2LTguNDkwNTY2MTcgNy40MzYyNjEgMTEuNjc0NTI4NDcgMTAuNjIzMjI5LTcuNDI5MjQ1NCA2LjM3MzkzOCAxNi45ODExMzIzIDIxLjI0NjQ1OSA3OS41OTkwNTc3LTI0LjQzMzQyOGMzOC45MTUwOTYtMzEuMTYxNDczIDU4LjAxODg2OS00Ny4wOTYzMTggNTcuMzExMzIyLTQ3LjgwNDUzMy0uNzA3NTQ4LS43MDgyMTUtNDguODIwNzU2LTM3LjE4MTMwMzYtMTQ0LjMzOTYyNS0xMDkuNDE5MjY1MDR6IiBmaWxsPSIjOGU1YTMwIi8+PC9nPjwvZz48L3N2Zz4=",
    description: "Connect to your Meta Mask",
  },
  walletconnect: {
    uri: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyYWRpYWxHcmFkaWVudCBpZD0iYSIgY3g9IjAlIiBjeT0iNTAlIiByPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1ZDlkZjYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDZmZmYiLz48L3JhZGlhbEdyYWRpZW50PjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0ibTI1NiAwYzE0MS4zODQ4OTYgMCAyNTYgMTE0LjYxNTEwNCAyNTYgMjU2cy0xMTQuNjE1MTA0IDI1Ni0yNTYgMjU2LTI1Ni0xMTQuNjE1MTA0LTI1Ni0yNTYgMTE0LjYxNTEwNC0yNTYgMjU2LTI1NnoiIGZpbGw9InVybCgjYSkiLz48cGF0aCBkPSJtNjQuNjkxNzU1OCAzNy43MDg4Mjk4YzUxLjUzMjgwNzItNTAuMjc4NDM5NyAxMzUuMDgzOTk0Mi01MC4yNzg0Mzk3IDE4Ni42MTY3OTkyIDBsNi4yMDIwNTcgNi4wNTEwOTA2YzIuNTc2NjQgMi41MTM5MjE4IDIuNTc2NjQgNi41ODk3OTQ4IDAgOS4xMDM3MTc3bC0yMS4yMTU5OTggMjAuNjk5NTc1OWMtMS4yODgzMjEgMS4yNTY5NjE5LTMuMzc3MSAxLjI1Njk2MTktNC42NjU0MjEgMGwtOC41MzQ3NjYtOC4zMjcwMjA1Yy0zNS45NTA1NzMtMzUuMDc1NDk2Mi05NC4yMzc5NjktMzUuMDc1NDk2Mi0xMzAuMTg4NTQ0IDBsLTkuMTQwMDI4MiA4LjkxNzU1MTljLTEuMjg4MzIxNyAxLjI1Njk2MDktMy4zNzcxMDE2IDEuMjU2OTYwOS00LjY2NTQyMDggMGwtMjEuMjE1OTk3My0yMC42OTk1NzU5Yy0yLjU3NjY0MDMtMi41MTM5MjI5LTIuNTc2NjQwMy02LjU4OTc5NTggMC05LjEwMzcxNzd6bTIzMC40OTM0ODUyIDQyLjgwODkxMTcgMTguODgyMjc5IDE4LjQyMjcyNjJjMi41NzY2MjcgMi41MTM5MTAzIDIuNTc2NjQyIDYuNTg5NzU5My4wMDAwMzIgOS4xMDM2ODYzbC04NS4xNDE0OTggODMuMDcwMzU4Yy0yLjU3NjYyMyAyLjUxMzk0MS02Ljc1NDE4MiAyLjUxMzk2OS05LjMzMDg0LjAwMDA2Ni0uMDAwMDEtLjAwMDAxLS4wMDAwMjMtLjAwMDAyMy0uMDAwMDMzLS4wMDAwMzRsLTYwLjQyODI1Ni01OC45NTc0NTFjLS42NDQxNi0uNjI4NDgxLTEuNjg4NTUtLjYyODQ4MS0yLjMzMjcxIDAtLjAwMDAwNC4wMDAwMDQtLjAwMDAwOC4wMDAwMDctLjAwMDAxMi4wMDAwMTFsLTYwLjQyNjk2ODMgNTguOTU3NDA4Yy0yLjU3NjYxNDEgMi41MTM5NDctNi43NTQxNzQ2IDIuNTEzOTktOS4zMzA4NDA4LjAwMDA5Mi0uMDAwMDE1MS0uMDAwMDE0LS4wMDAwMzA5LS4wMDAwMjktLjAwMDA0NjctLjAwMDA0NmwtODUuMTQzODY3NzQtODMuMDcxNDYzYy0yLjU3NjYzOTI4LTIuNTEzOTIxLTIuNTc2NjM5MjgtNi41ODk3OTUgMC05LjEwMzcxNjNsMTguODgyMzEyNjQtMTguNDIyNjk1NWMyLjU3NjYzOTMtMi41MTM5MjIyIDYuNzU0MTk5My0yLjUxMzkyMjIgOS4zMzA4Mzk3IDBsNjAuNDI5MTM0NyA1OC45NTgyNzU4Yy42NDQxNjA4LjYyODQ4IDEuNjg4NTQ5NS42Mjg0OCAyLjMzMjcxMDMgMCAuMDAwMDA5NS0uMDAwMDA5LjAwMDAxODItLjAwMDAxOC4wMDAwMjc3LS4wMDAwMjVsNjAuNDI2MTA2NS01OC45NTgyNTA4YzIuNTc2NTgxLTIuNTEzOTggNi43NTQxNDItMi41MTQwNzQzIDkuMzMwODQtLjAwMDIxMDMuMDAwMDM3LjAwMDAzNTQuMDAwMDcyLjAwMDA3MDkuMDAwMTA3LjAwMDEwNjNsNjAuNDI5MDU2IDU4Ljk1ODM1NDhjLjY0NDE1OS42Mjg0NzkgMS42ODg1NDkuNjI4NDc5IDIuMzMyNzA5IDBsNjAuNDI4MDc5LTU4Ljk1NzE5MjVjMi41NzY2NC0yLjUxMzkyMzEgNi43NTQxOTktMi41MTM5MjMxIDkuMzMwODM5IDB6IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk4IDE2MCkiLz48L2c+PC9zdmc+",
    description: "Scan with WalletConnect to connect",
  },
  fortmatic: {
    uri: "data:image/jpeg;base64,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",
    description: "Connect wtih your Fortmatic account",
  },
  torus: {
    uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAUFQTFRF////AHD/AGX/AmX/BGP/A2T/AmP/AmT/A2T/AGT/A2P/A2b/AGj/AmT/A2P/A2P/BGT/AmT/BGT/AGD/A2T/A2P/A2T/AmT/A2b/AGP/AmT/A2X/A2T/AmP/AmP/BGT/A2X/AmT/AmT/BGT/A2T/A2P/AGD/AmP/BGT/BGP/AmP/AmP/A2P/AmL/BWT/BGT/AmP/A2L/AmP/AmP/A2T/BWX/cqf//v//z+H/BGT/kbv/kLv/v9j//v7/Y57/Qov/I3f/7vT/r87/UpX/YZ7/I3j/U5X/3uv/BGX/Q4v/FG//cqj/caj/gLL/FG7/kbz/n8X/gbL/3+z/kLz/Q4r/7vX/A2T/Inf/Qor/Yp7/UpT/MoH/E27/caf/wNj/7/X/////Inj/ocX/3+v/0OL/sM7/oMX/gbH/gLH/4Oz/M4H/liWFrQAAADZ0Uk5TABAwb5Cv38+/QO9fIH/f3kCPjhDuUP5wUFCAYL6Qj8/ezm8/714g3n+P3e5PcG+A7WBub64wwl4EnAAAA7tJREFUeJztnM9v2jAUx30aU5G2yxRx4ZDTJCohDpGKxA+piLZuOVAOYx2DgkLZj/7/f8CAkkJIbEheMj9H38/12cr71HmubRELcUjdK12MraBR8oSKsms6u6S4cRqVmum00lCLeHimU0pLNexh3Vu1J/R+fTCdDYWve4+S6VxovI+JtfURENSJ6TzIOJWth5XzbphaMQZkTdnumXePW5ABGTtFERnX7Z973/Bs/2cYUBIN0ylkw5eClMi62k1nkBEQ4QZEuAERbkCEGxDhBkS4ARFuQIQbEOEGRLgBEW5AhBsQ4QZEuAERbkCEGxDhBkS4ARFuQIQbZBE5Gfmrk/itexnb/abf8v3HgSKaAKpI93pxJtfdSGfZbwbR+eNPWiI0Ebk6V2PD6ujPfn93GO0MSaNCE0nkcWzy+zh8992USDeZx2IxO+jciob/3pgRkWfXR8C3/ZAM4uLLqRGR+6Qei8Uk6PvaiY33jIjEvBynaAV9m/HxqycTIn5ykeAvPlE1aJsQSThnHYoou3bS1rsZERlfIRsGVom8nmxhiUhf3eLFKpGZusU1REyI/FC3uLNK5EndYmWViGb6/WOViLrrVdr9laElyq2qQTNtMv950RiIyJf4+NVE+8ScRJQrv9MiqnJPW+rEjdU8vch4FBdept/skra6sbu8M0VkLxqdE05SSCKynV5kLCMltiRs2YmnKNOkM3BobXsb3vP/Sr9hJ4uM5SBZnYQX6XK2DAKdXupN7hvkI9Npf9h+DqM5XInsNl4Hj6t2b3RLGo0NeRxia9639Kckp4CIBohQgIgGiFCAiAaIUICIBohQgIgGiFCAiAaIUICIBohQgIgGiFCAiAaIUICIBohQgIgGiFCAiAaIUICIBohQgIgGiFCAiAaIUICIBohQgIgGiFCAiAaIUICIhsKIDNUiw+yftiMPEc13n/3sn7YjD5Gp8of/c/JP4JXkcsFL5FqKgLTf5p1BLiJScX/AM/kaFzX5XLnzEGvSfMjjWTtyujtItiLffnZGOY5HjpcgPXT9w49j/Fl+db4FtzlxAyLcgAg3IMINiHADItyACDcgwg2IcAMi3IAINyDCDYhwAyLcgAg3CiRyYTqFbGiIkukUsqEkPNMpZIMn6qZTyAYhilHtzlrENZ1EFnxci5RNJ5EBmwERomY6DTq1rUjFdBpk3gZEiKrpRKhUdyK217sr3vlkOhcKn8UBFi9UXBHC1jpxquIYG2dhp1aJeFhY845bjtPY4pUaptML4ai4dL16KPN/s6dp8DNrAS0AAAAASUVORK5CYII",
    description: "Connect with your Torus account",
  },
  portis: {
    uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gKgSUNDX1BST0ZJTEUAAQEAAAKQbGNtcwQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtkZXNjAAABCAAAADhjcHJ0AAABQAAAAE53dHB0AAABkAAAABRjaGFkAAABpAAAACxyWFlaAAAB0AAAABRiWFlaAAAB5AAAABRnWFlaAAAB+AAAABRyVFJDAAACDAAAACBnVFJDAAACLAAAACBiVFJDAAACTAAAACBjaHJtAAACbAAAACRtbHVjAAAAAAAAAAEAAAAMZW5VUwAAABwAAAAcAHMAUgBHAEIAIABiAHUAaQBsAHQALQBpAG4AAG1sdWMAAAAAAAAAAQAAAAxlblVTAAAAMgAAABwATgBvACAAYwBvAHAAeQByAGkAZwBoAHQALAAgAHUAcwBlACAAZgByAGUAZQBsAHkAAAAAWFlaIAAAAAAAAPbWAAEAAAAA0y1zZjMyAAAAAAABDEoAAAXj///zKgAAB5sAAP2H///7ov///aMAAAPYAADAlFhZWiAAAAAAAABvlAAAOO4AAAOQWFlaIAAAAAAAACSdAAAPgwAAtr5YWVogAAAAAAAAYqUAALeQAAAY3nBhcmEAAAAAAAMAAAACZmYAAPKnAAANWQAAE9AAAApbcGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAACltwYXJhAAAAAAADAAAAAmZmAADypwAADVkAABPQAAAKW2Nocm0AAAAAAAMAAAAAo9cAAFR7AABMzQAAmZoAACZmAAAPXP/bAEMABQMEBAQDBQQEBAUFBQYHDAgHBwcHDwsLCQwRDxISEQ8RERMWHBcTFBoVEREYIRgaHR0fHx8TFyIkIh4kHB4fHv/bAEMBBQUFBwYHDggIDh4UERQeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHv/CABEIAMgAyAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUDBgcCAQj/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAgMEAQX/2gAMAwEAAhADEAAAAeygAAAAANd2KUQjIAAAAAAAAABUWmhX5dc6Rzb3qq7C+ffO3gAAAAAAAACL3lHrfrz6ni0tVa1UtHR9y4d2fBtlDPcAAAAAAAA0q+0zZ54bcFLVWtVHY27UUbO8qO88vcHOgAAAAAPHvWJ1UsZj9Tx8nyipOW2sSk8QvvkGbPtx2DhHRM1+6jFpAAAAAAhc82Lk+zFcU3hbwE4saTGjWyY3OWdtq2eb9Fy9U2vz9wckAAAAI7mg8x6Hpu7zoEiikrbRjyS7FjSY3IHnDHmSfU2rvVN/4L3ejT7FNwAAACHMxdjzoex4VZpPSfldnI522aZRqlQsWXksUy0n2I8gu47lxLuePR9GTQAAAABocHbdS9PxwuoYsrndKyW9VHUHbANj6trmx+bsCqwAAAAD5pG8YbaOdp0H0vJY/UHscVPcx42Vj787qbRg6nmvyjDqAAAAAAA8artqdfKo3XYGjHzF0iRKHOdp2tTp+fSjUAAAAAAA0LfdcJ0b5PKGdMwkXB7mlZ5uxT2vqWSwAAAAAAAAAAAAAAAAf//EACoQAAEDAgMJAAIDAAAAAAAAAAMBAgQABRATMAYREhQgITEyQBVQIjM0/9oACAEBAAEFAv0v5Fv5P57mfJDcOz7PM5yJ8r3I1soynNcfa0S1hy0VFT5LvIwuPtWzU3MF8coyAC5Vc6rj7VHM8B4h2SY/xXKRnGwuPths5NyT/Dcz5Qcbj7Y2aZzcTXe5GNklUxsFVESbIC8mNplrDltVHJrXeRg97WIe4JRSkKp/IyvZTJDVx2am8Y9WYZABOdjKPcHLT3OeuB/ODHuZTJKVFOoixDskx9TaCLOMhEej+g/nojsKQuzkOZEBqXfaXl3y58qUcZWu6D+cVdVvuMqAW0bSDlv05C8Mc4RmZNtTx0vZRmVtMc12B/NKu6ldvpO9BiKtDTLpi8TNKb/kwmQgSUmQDxqRVShnoypSuwDHeShCYPGP/RpFbxj6JtqGWpACgfQxvIoYzGdAWZhU7Jpzx5croKNhWSrcIRkRETo2dBm3HUu4eMXTN/l1bPxOWhai90nxlAXF67mqm9HJuXGwwOZNrFG0rJkZ0d1KqJT3cS0YfFSoqYWq2EmOENgh672te2XaaMEwVxDFNIqFZxsVERE+Je9PhxX1+OhUyJGZ8b5Zmv51lXLOzgyy8wO4vPQLmSQrr2BaKZxnAnnQhppjLbDyDt1ltjnKyPmXmRGUpIsEQCstzB0G2ZUpttENCQ3KSPAAAYYARIADQv8A0H//xAAmEQACAQIGAQQDAAAAAAAAAAABAgMAEQQQEiAwMSETMkFRFEJQ/9oACAEDAQE/AdysG65MTLoWwrDtpHGTYXNSyeo16j9tRPcW4sXL+gyj9tKbG9A34JZPTW9EljSwMe6A0+MoW+OCdC7eeqVAvWRzXrzuJtQxGvur5HLqonLd7mFxkshWkkB2QfO+dND5xtcZxrZd80XqCmUqbHKN9Jyijv5PC8Syd02C+jX4TfdR4VV78/wP/8QAJhEAAQQBAwQBBQAAAAAAAAAAAQACAxESBBAgITAxURMUIkFCUP/aAAgBAgEBPwHk5pb57kEebrU8eY7YF9FGzBtbaiPE32tNH+x3e3IUiKNHsRszdSAoIvWaBtamPpkOxAQB0RN8M/adV9Ofw4eEHb2qLlNHhXIednMBRaWq7TY/e2q/HOF+TNwAN5n5O5xSfGU1wcLHCeavtHZY9zPCGq9hfVNT9Q53j+B//8QANxAAAgAEAQgIBAYDAAAAAAAAAQIAAxESIQQQEyAiMTJBFCMwQFFhcZFCUoGhMzRQcoKxYqLB/9oACAEBAAY/Av0UZOaWNgp8+8WrxtCEQGP4i4P3Ys2AEFz9IWA54Dg/pFRu7roF/lmXN0VztJw+ndC5+kFmxJzLmSdL4lMJOTcw7naOBc65+jOdiZu8j3KxeNtRdQEnrFwfuBZsAILn6Z6k0EKFfUD/AAHB/SAwNQe30C/yzVdgBFJS18zFXYmBGB+kbWzn6JMO0vB6dsX58oumviYpKWnmYqzEnOM+yaRtj2hZ0psVMJOTcw9u1D5KwKqODnBDghudd+qNUJIVmc7gsN0p12sbBy7UysmyclvnmYCNNPmXN6R4HUGqZmTvSu8EYGFk5RIMuYcLlxXtJjeCmLJqBhF+T7a+HOKGKHERgcw1KCKzMPKBZhSA3iOzm/tz7Qo/zCKkXJ8wjCKP7wDWMM1eFY2R9c8v9o7Nl8RTVLSerbw5RbNQrmooirbR1Elj4mpFO0ccjiNWyYoYecYMxU8ooBTVVvhl7Xa6Ub03+mtXw1rmG3M2j/ztaRhwHdq0impppg6lP9j25RxUGMcUO5s2Oeo3xjmveqSfHx9IEuWtqjcO4FWAIMXZM1P8THWy2X11NiUW8+UB59GPyjdFBu7nQxtSE9qR+D9zGzIT27nlDCZlN6ZTaDb1QWo3mGWxr1nCTbzr4+2MS/zHR7TdoOK7+/aJUvJjNysaN637BBDDihei5K0xrbnDOFtxIp61Bi2RkblrLyGYCmLD32YAl6OtlzCbNEunl6x0gnLRkzorSTIFaVHMDGsZQZatlkmWiNfUD4eXnCLk9SjZSEJraaWXRO06Kts1lFGr289TlkzQTnLPKCjGu8Vhsq0bIiJbj8TY4+39wJiZTOkMBTYIofoaiNKGmNMobmY8VaY/aOpnzpRxqVpjVi3MeZh9DOnyU0SqrKwJO05O/wBYHR5s6Rs2mwja9aj7wXl5ZlMm7iCkEfcGkTEl3UmKFOPlC2l9mZpBjztt/qJpVmpMa607gf0H/8QAKRABAAEDAgQGAwEBAAAAAAAAAREAITFBURBhcYEgMECRobHB0fBQ4f/aAAgBAQABPyH/ABTGS6X+8eouhFk5GrSViIWSiUmG579/TJxAlawTNhsV8NpTHHfbtRNhRImvpcT8/wATh8N4SNty3Xb29JmuLDdp8JErw+G8GQiUc+VIHmRs6no7y6JzdXj8N4zN1Z/zf9eivxonI1fB8N4iiIwlHpt3Pfv6BKoErWvthscWQgyrRFGDOngU6477dqEkCRNTz5Gexf8AA4dbxNAmU7ftXRDdOA2D3Yq3mXxQiSIm5wk7DlOuzt51tmk7tNoMm61IQvcrm3JfEEpWjLQ86BevhPpp29hu1PNucYC3WNAurAxPPyhYkUCVoXvYLk+bj280yf6HdDL8UrnRGABtarL2HyARi7RQ3aQhzpymgui/J8+Zvwg9qTcwdKnkd7j+6CgImRr/AKTULM3gAZU3IUFQKuhUQ8NmaCwJpIrkkPliYN3FU7dn/wC0y+w/vtSEqGv0CmQCI46MXUaN1NVniEJyfV5fMf8Ah4EEhJKkme6/qpFDTZ6PC+Hu6FRvccHgTOCPdoADB5ljbnafC8SdBQNIpHp3o0IGh4ZNJFfXT5+vNhB8UZDq8SBGzmho/t/NAiJHNWE13ty8E866UTLDSu8ngcb819jp6CqL+vBjrwNlU8mmnCDofmkIEPA6IW+vl/aicDgNPQZA7CTNST1bt2ajKG4t7+BCDdx9qHEujZ13oAADAejAEBHRr64/grlf651jy7sn5osQeiOWWyYpLUBE3mav7TTJQnRLsGobW2WQidkT9qE9TCOpEEIMYn7oAdUUErzB7WzUSbEJTFXqW+aWAIGdKbZzY8udDrN65Isz2E+agLBU8uYarMWKiNkpsZC2vvpTC1puDjB55lJmPQEw0qAONNtE5JJ16KmvUrA5j3ImpE0ISpJUGbMQRVzb35pgGQsxRe9PE/bpIMXEbxN85oRhTOIExdXu2Q3qEWAV0ETmI2ios8wysQnrQ7aUgw5eKOmyaEjKWm/+D//aAAwDAQACAAMAAAAQ8888888888888888885a08888888884rqQ888888888zBqF08888888viJFMU8888888DzAAC1X888886nBLALpX88888pJnXFQgO888888iBCpAAW888888tLRDBI88888888cOBlc88888888U8o0c88888888888888888//EACMRAQACAgICAgIDAAAAAAAAAAEAESExEDAgQVGhUJGxwdH/2gAIAQMBAT8Q8hLXZ84MrL09ZtoIiOaZmmzq/uONMUhAFnQCuWByszOBBFOKW/QO0ECw434FvESh28qCsXB1/EB743gQdiAJ6eVifJxjtk0MctxeBt5up6cnA1Eved178zr9moiGngqHTBuWPV0kUYv+0Lcj7mXVvr9fgP/EACIRAQACAgICAgMBAAAAAAAAAAEAESExEEEgMFGxUHHB0f/aAAgBAgEBPxDypAb9mYaJodnrRA2wAMZgen79X8rhgu47bD0KRgEGiAag7zB0lnwN+i75LE24d8CqsiAM08gtCO7OfJLuO4ghi1BuO/J0HjK9xvOopUTtgAKI9P351T2Y4S5pDm7rRjze3ruWAsi1yBtz9elS3C/yj0DMBgfgP//EACgQAQABAgUCBgMBAAAAAAAAAAERACExQVFhcRCBIDBAkaHwscHRUP/aAAgBAQABPxD/ABTPB+5tdMDcNfUSsUsbf7Ab8U8FiiERIRqz9WCklo6C/MmXpgWrOyCpCxJbh4H3Na+21KsvGO8pyaq/uZ0ItSkgcE9LJsLD3/a9un22p0vbzUvN+T4TT0kASUvPwPuQ051Z2a49PttTpExzS1LZJHmpKQrl8JNxk7ejkpasbb7Acb9fttTraHu6tgnYW5PRJ2CLBj9wOdvB9tqdWbIkRhHWgVImYYW4i/MmXoDMruyCpHwcS4eB9znqNSJgA706GYUImcltW/Vdiwc05NVc7mdBSI9IhIjp58fcg5m4/se3R+RZxTxrUu2FBHZie8VtUCYHAWK+I1BiPM9mXaopGri/2fb0Tc8Eke/S/Kpjn5y9nbzlNJX+bMdjHtQrTLFlucYvNQqYUc9pgd5p25ap6/Eeu6VBceTBqMneY7mP54pH8LkjrsJImjWNQjKULJuMnmsuSFu4qmFSLWbETSspjpmAN558PxHwr1WTdkZfFSsBHlnINyQIIsX8xQJWCpFtApNnZ3XuoQBkYswACI96i275jw+D4j4LP2GFHTgGqZgN+4jvU1iKFEEzir/XmOC+5AopGCwBdajiO5UFHu4Ttl2X2aXC0AhHRKjpN3B3qF7UZnJ0+I9D7r6Z1YjgKGpaAJWpQsSa7lypu3aHEJg80REBadyfLYWKfsEvW0FoAHfkOe0VEHmwKDZivjeibywRqeAjY/J/KnsNIjalbWbtKrKy1BiTLu8GdQ+7Mwu/86ktYXmPlgqTYuUfukRRETEeqICEIkiVNN7sLvB+FtqS5wkkdcBKm0ZaVMwDFtyNWRHeR7B/fA9yMhqB+6EGAANA8xZoJ9wtwydvDiaumRuaO5WZINanDMnzvWF0IIDwpPYlwhY8yHu81Z/kAYqxezfhfEYZDO2D8+JMTwRDHd4FeUZeaMIEBJE0pksq/KPc+Tv4Bnbrcqwj1HvRe3I58C64bAsNzeMX2zsW84+YLmY5I5JQ6SiIoHdpszy6REB8tSNYYOgHABbZo0zaWInS/Z1EQamPwN21DMmTYfc8/QGQCDgNymTs7zf4OH3p5OkXC4Fns+AhtqRyrVeyYQG3Y/A5om6wCANA9GNFIQkSlVUuLMe8KuzXmhIYBLvJoAAAWAy9FbjwIVEi3IAWhmmJTIcIUL3x/HASRSYEGSlzJflc2iKgw+lQAlQ2M0ijeg5nBg9NLSGqgSWwV5powbloSXuIlA11bSEE40nA2z0UscwgAFklmCEXpdOJ2smAkCohhJYoTLvBBNTErrABskTOHqM5LSte8zl55F7R1kkokQwjCwlWrMeBIAVt9RCOSnl3kE5h0RmAMkxagUdUA8oYMAAgMKLtiRoyoCVAAiWkuF6CB41SjAlGYWWarvSzHjDmsQTKWAQALYAsTii3o1hqniolJkKqzKzTzZLpbgdgW1vOVIHM4DaUldFScIln/A//2Q==",
    description: "Connect with your Portis account",
  },
};
