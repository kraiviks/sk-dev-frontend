# Base image for installing dependencies
FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1

# Copy the rest of the application code
COPY . .

# Expose the port and start the development server
EXPOSE 3000
CMD ["yarn", "dev"]
