rmdir /S /Q .cache
rmdir /S /Q public

set PORTAL_DOMAIN=localhost
set GATSBY_API_URL=http://localhost:5522
set INTERNAL_STATUS_PORT=443

call yarn start --https --host 0.0.0.0
