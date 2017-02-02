" Configuration file for vim
set modelines=0		" CVE-2007-2438

" Normally we use vim-extensions. If you want true vi-compatibility
" remove change the following statements
set nocompatible	" Use Vim defaults instead of 100% vi compatibility
set backspace=2		" more powerful backspacing

" Don't write backup file if vim is being called by "crontab -e"
au BufWrite /private/tmp/crontab.* set nowritebackup nobackup
" Don't write backup file if vim is being called by "chpass"
au BufWrite /private/etc/pw.* set nowritebackup nobackup

set showmatch 
set number
set cindent
set autoindent
set autoindent
set confirm
set tabstop=4
set softtabstop=4
set shiftwidth=4
syntax on
set hisearch
set incsearch
set gdefault
set encoding=utf-8
set guifont=Menlo:h16:cANSI
set autowrite
set wildmenu
set whichwrap=b,s,<,>,[,]
set autoread
set completeopt=preview,menu
set clipboard+=unnamed
set mouse=a
set selection=exclusive
set selectmode=mouse,key
filetype plugin indent on

