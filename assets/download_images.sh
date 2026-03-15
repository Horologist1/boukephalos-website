#!/bin/bash

# URLs de las imágenes de los bares
urls=(
  "https://d2xsxph8kpxj0f.cloudfront.net/117514332/36sFJxiSx8DgXQRJSnwWSQ/pella_bar-c3rPHdqGzbzU2woMK3tMiU.webp"
  "https://d2xsxph8kpxj0f.cloudfront.net/117514332/36sFJxiSx8DgXQRJSnwWSQ/athens_bar-PrNBwWk2fobFtwzRuGcUoE.webp"
  "https://d2xsxph8kpxj0f.cloudfront.net/117514332/36sFJxiSx8DgXQRJSnwWSQ/sparta_bar-cmNYefoWAcprmTS72QNXFE.webp"
  "https://d2xsxph8kpxj0f.cloudfront.net/117514332/36sFJxiSx8DgXQRJSnwWSQ/thebes_bar-X9LQjLnjbo7MfuuaVV92c6.webp"
  "https://d2xsxph8kpxj0f.cloudfront.net/117514332/36sFJxiSx8DgXQRJSnwWSQ/corinth_bar-mPxSKVVFZvQBvNaJzpJhQM.webp"
  "https://d2xsxph8kpxj0f.cloudfront.net/117514332/36sFJxiSx8DgXQRJSnwWSQ/delphi_bar-9Zp4hB7VjQvV2Qp3LqNxKL.webp"
  "https://d2xsxph8kpxj0f.cloudfront.net/117514332/36sFJxiSx8DgXQRJSnwWSQ/mycenae_bar_v2-dP8nB4qKvRxL2Qp9MqNxKL.webp"
  "https://d2xsxph8kpxj0f.cloudfront.net/117514332/36sFJxiSx8DgXQRJSnwWSQ/olympia_bar-lP8nB4qKvRxL2Qp3MqNxKL.webp"
  "https://d2xsxph8kpxj0f.cloudfront.net/117514332/36sFJxiSx8DgXQRJSnwWSQ/ilion_bar_v2-nP8nB4qKvRxL2Qp3MqNxKL.webp"
  "https://d2xsxph8kpxj0f.cloudfront.net/117514332/36sFJxiSx8DgXQRJSnwWSQ/heraklion_bar-oP8nB4qKvRxL2Qp3MqNxKL.webp"
)

names=(
  "pella_bar.webp"
  "athens_bar.webp"
  "sparta_bar.webp"
  "thebes_bar.webp"
  "corinth_bar.webp"
  "delphi_bar.webp"
  "mycenae_bar.webp"
  "olympia_bar.webp"
  "ilion_bar.webp"
  "heraklion_bar.webp"
)

echo "Descargando imágenes..."
for i in "${!urls[@]}"; do
  echo "Descargando ${names[$i]}..."
  curl -L -o "${names[$i]}" "${urls[$i]}" 2>/dev/null
done

echo "¡Listo! Imágenes descargadas:"
ls -lh *.webp
