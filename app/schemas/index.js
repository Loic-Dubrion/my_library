import { gql } from 'graphql-tag';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Types
const book = readFileSync(join(__dirname, './book.gql'), 'utf8');
const author = readFileSync(join(__dirname, './author.gql'), 'utf8');
const mutationResponse = readFileSync(join(__dirname, './mutationResponse.gql'), 'utf8');

// Query && Mutation
const query = readFileSync(join(__dirname, './query.gql'), 'utf8');
const mutation = readFileSync(join(__dirname, './mutation.gql'), 'utf8');

// schema
const schema = gql`
  ${book}
  ${author}
  ${mutationResponse}
  ${query}
  ${mutation}
`;

export default schema;
