# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.4.2] - 2020-09-05
### Changed
- Fine tuned greenlock for use in a docker container
- Made a persistent volume to store greenlock certs
- All config options moved into .env
- Greenlock config created automatically at build time
- Made a script to convert docker-compose into a "production" runner. The script is in README.md

## [0.4.1] - 2020-08-29
### Added
- Add greenlock to provide an SSL server option
### Changed
- Tag images in a docker-push-friendly way. Use LTS version of node	

## [0.4.0] - 2020-08-23
### Changed
- Added voice-service

## [0.3.3] - 2020-08-09
### Changed
- Bumped front-end version
- replace `latest` tag in favour of explicit versions for all images

## [0.3.2] - 2020-08-08
### Added
- Converted hardcoded host paths into config
### Changed
- Removed https support in favour of having this service behind a gateway

## [0.3.1] - 2020-05-19
### Added
- Added support for https

## [0.3.0] - 2020-05-07
### Added
- Integration deep speech voice recognition

## [0.2.0] - 2020-05-05
### Added
- Integration with IBM Watson
### Changed
- Improved documentation 

## [0.1.0] - 2020-04-21
### Added
- Created Reverse Proxy service

