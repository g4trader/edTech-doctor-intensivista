FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
COPY apps/api/package.json apps/api/package.json
COPY apps/web/package.json apps/web/package.json
COPY packages/shared/package.json packages/shared/package.json

RUN npm install --no-fund --no-audit

COPY . .

RUN npm run build --workspace @doctor-intensivista/api

EXPOSE 3333

CMD ["npm", "run", "start", "--workspace", "@doctor-intensivista/api"]
