# [dawidpotocki.com](https://dawidpotocki.com)

My _decent_ personal site.


## Setup

```sh
$ sudo apt install git npm ruby      # Debian-based
$ sudo dnf install git npm rubygems  # Fedora-based
$ sudo pacman -S git npm ruby        # Arch-based
$ sudo xbps-install git nodejs ruby  # Void-based
$ sudo apk add -i git npm ruby       # Alpine-based

$ gem install bundler
$ bundle
$ npm install
```

### Production

```sh
$ sudo apt install nginx libnginx-mod-http-headers-more-filter  # Debian-based
$ sudo apk add -i nginx nginx-mod-http-headers-more             # Alpine-based

$ ln -s /var/www/dawidpotocki.com /etc/nginx/sites-available
$ ln -s /etc/nginx/sites-available/dawidpotocki.com /etc/nginx/sites-enabled
```


## Build

```sh
$ npm run build-dev  # Development
$ npm run build      # Production
```


## License

Project is licensed under [BSD-2-Clause](./LICENSE), unless specified otherwise.
