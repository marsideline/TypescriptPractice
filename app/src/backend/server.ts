// APIのエンドポイント
import express, { Request, Response } from 'express'

const app = express()
const port = 5173

app.use(express.json())

app.get('/api/login', (req: Request, res: Response) => {
    const { username, password } = req.body
    console.log(username, password)

    // ここで認証ロジックを実装
    // 例: データベースとの照合など

    res.send({ success: true })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
