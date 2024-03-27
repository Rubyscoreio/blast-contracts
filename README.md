## Rubyscore Smart Contracts for Blast network

This repo will have a code of Rubyscore Smart Contracts for Blast.

## Deployed Contract Addresses

### Contracts

| Name | Mainnet  | Testnet                                               |
| ---- |----------|-------------------------------------------------------|
| Rubyscore_Achievement | 0x009DBFEe9E155766AF434ED1652CA3769B05E76f | 0x2A1000293467a221F5d4cA98F4b7912c4c9c22b3   |
| Rubyscore_Vote | 0xbDB018e21AD1e5756853fe008793a474d329991b |                         |

### Operator
| Operator             | address(Mainnet)                           | 
|----------------------|--------------------------------------------|
| 0x72f46FFBd3213218137015EBCcf70bFAaF619513 | 0x009DBFEe9E155766AF434ED1652CA3769B05E76f |
| 0x72f46FFBd3213218137015EBCcf70bFAaF619513       | 0xbDB018e21AD1e5756853fe008793a474d329991b |

## Setting project

### Install dependencies

```sh
yarn install
```

---

### Compile contracts

#### Blast network

```sh
yarn compile
```

---

### Migrate contracts

#### Blast network(mainnet, testnet)

```sh
yarn migrate:<NETWORK> (mainnet, testnet)
```

---

### Verify contracts

#### Blast network(mainnet, testnet)

To verify the contract, you must specify the names of the contracts for verification through "," WITHOUT SPACES

```sh
yarn verify:<NETWORK> <NAME_CONTRACT_FIRST>,<NAME_CONTRACT_SECOND>
```

---

### Tests contracts

```sh
# Run Tests
yarn test

# Run test watcher
yarn test:watch
```

---

### Node hardhat(Localfork)

NOTE:// To work with a node or fork, you need to run the node in a separate console

```sh
# Run Node hardhat (For run localfork setting config { FORK_ENABLED: true, FORK_PROVIDER_URI: "https://...."})
yarn node

# Run test watcher
yarn test:node
```

---

### Coverage

```sh
yarn coverage
```

---

### Gas reporter

You can start the gas reporter either through a separate gas reporter script through "**yarn**" or by changing the variable in the config "**GAS_REPORTER.ENABLED**" when running tests

```sh
# Native gas reporter
yarn gas-reporter

# GAS_REPORTER.ENABLED = true
yarn test
```

---

### Clean

```sh
# Rm artifacts, cache, typechain-types
yarn clean

# Rm deployments for choose network
yarn clean:deployments <NETWORK>
```

### Linter

```sh
# Checking code style for .ts, .sol
yarn lint

# Run fix code style for .ts, .sol
yarn lint:fix

# Checking code style for .ts
yarn lint:ts

# Run fix code style for .ts
yarn lint:ts:fix

# Checking code style for .sol
yarn lint:sol

# Run fix code style for .sol
yarn lint:sol:fix
```

## Auto audit with slither

To run the analyzer, you must first install it globally

To audit all contracts, use the command :

```sh
slither .
```

To exclude warnings in subsequent audits, use :

```sh
slither . --triage
```

## Deployment config

```
{
  "INFURA_KEY": "",
  "DEPLOYER_KEY": "",
  "BLASTSCAN_API_KEY": "",
  "GAS_PRICE": "",
  "NODE": {
    "GAS_PRICE": "auto",
    "LOGGING": true,
    "FORK": {
      "FORK_PROVIDER_URI": "",
      "FORK_ENABLED": false
    }
  },
  "GAS_REPORTER": {
    "ENABLED": false,
    "COINMARKETCAP": "",
    "CURRENCY": "USD",
    "TOKEN": "ETH",
    "GAS_PRICE_API": "https://api.etherscan.io/api?module=proxy&action=eth_gasPrice"
  },
  "DEPLOY": {}
}
```
