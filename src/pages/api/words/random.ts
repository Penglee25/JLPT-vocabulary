import { NextApiRequest, NextApiResponse } from 'next';

import { Word } from '../../../types';
import { randomWord } from '../../../utils/search-words';
import withCors from '../../../utils/with-cors';



function handler(req: NextApiRequest, res: NextApiResponse<Word>) {
  const level = parseInt(req.query.level as string, 10)
  const data = randomWord(level)
res.status(200).json(data)
}

export default withCors(handler)
