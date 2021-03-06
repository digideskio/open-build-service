#!/bin/bash

export BASH_TAP_ROOT=$(dirname $0)

. $(dirname $0)/bash-tap-bootstrap

plan tests 2

DB_NAME=api_production
DB_EXISTS=$(mysql -e "show databases"|grep $DB_NAME)
is "$DB_EXISTS" "$DB_NAME" "Checking if database exists"

TABLES_IN_DB=$(mysql -e "show tables" $DB_NAME)
[[ $TABLES_IN_DB ]]
is "$?" 0 "Checking if tables in database $DB_NAME"
