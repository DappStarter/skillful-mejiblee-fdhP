require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remember protect heavy enrich only slight'; 
let testAccounts = [
"0xd45d9e2ed3f33cd987cb44126fcb63578c814e7ea3e54de7c669a07324d6a191",
"0xc4d2dc0db02ee4fe1379e9529f80bf48182994bad4cb9be8f2d948b807ea58a6",
"0x71c02ac8a05f0b8f48c882a2a10a4bf9cf095ac40436e17ab1a0b7428ed22447",
"0x632371c76da828050683fe695b1fcd3aea925bd6e0499ba25a47ae778306494c",
"0x6937487c57a84b240e25f78c2fea885de59979cda5caff590c589cca44273efd",
"0x778483b7f3d53c94430d8c00ed69e6983879f417eef3060fdf24aa203edfe18f",
"0x165d0d94279ce8ea6a215b9b1e01c1f2e964f053238cd94a77e2f7999cd5e87d",
"0x9a5d095a016daca6cc675633f02aa23538026ced24f131d5e0fcd7f6c4df5b60",
"0xc92329d1603f1f19634fa83ce504d10171a7b6b19ac887ba4408373c2a3fa8b9",
"0xfc2457c58084f6389a19d2cda51117957b7aaf8b2139b913a64728dd1ed24b19"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

