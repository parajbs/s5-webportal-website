rmdir .cache
rmdir public

export PORTAL_DOMAIN=localhost
export GATSBY_API_URL=http://localhost:5522
export INTERNAL_STATUS_PORT=443

yarn start --https --host 0.0.0.0
