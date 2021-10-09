require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remind concert hunt narrow fresh type'; 
let testAccounts = [
"0x1b1b8b7b07d6025fdfaa6fea42c5ca7e1ba1ada18649e7e061a0a2deedb61b78",
"0xd76cc17a867e2347024e50999f93e601c275a3a84665ec4ce3d54cbc510aba11",
"0x6087ed289dd15cd2cc20027cc0d64f37dccd40519d174ddfba333be5d6992989",
"0x4ccf95732167c8d9f686c0cbba187f5a3930ac19b700f6f60361413a0146fc6f",
"0x3e87007d693e8094612021a8eab991b645f02f3f8b8669dcabb9160e0b2a04e6",
"0x1a3b5bc5a24149750e9684098b4d5a7dda47e7e67e791a9d005f2d3ed2f3d477",
"0xcb5a8ab659dcfda6602a59c7679ced2c11e52ed8dab8a930fd57d9d7635e2cdf",
"0xc2c2bc6bab9fedb7240d75bb9990f7ccb5b27d2b4aeb25008187d480bf86c36e",
"0x2939f4bd6eb43c01bab5b50a38c62d6ec9928f39df3e156734e367a281c444b8",
"0xc9c03b3ad3dd4a832a3f0515bf83735f38721816625706a7bde47bee0d431869"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

