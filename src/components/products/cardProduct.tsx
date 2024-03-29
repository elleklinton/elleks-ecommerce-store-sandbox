import ProductBadge from './productBadge';

interface Props {
  id: string;
  subscription: boolean;
  thumb_src: string;
  thumb_alt: string;
  title: string;
  description: string;
  price: number;
  color: string;
  colors: string[];
  position: string;
}

export default function CardProduct({
  id,
    subscription,
  thumb_src,
  thumb_alt,
  title,
  description,
  price,
  color,
  colors,
  position
}: Props) {

  const classList = "card-body " + "text-" + position;
  const formattedPrice = parseFloat(price.toFixed(2)).toLocaleString(undefined, { minimumFractionDigits: 2 }) + (subscription ? '/month' : '')

  return (
    <>
      <div className="card card-product border border-white mb-5 shadow-xs">
        <a href={`/products/${id}`}>
          <div className="height-300">
            <img className="w-100 h-100 rounded-top" src={thumb_src} alt={thumb_alt} />
          </div>
          <div className={classList}>
            {(color) &&
              <p className="text-sm mb-1 text-body">{color}</p>
            }
            {(title) &&
              <h5 className="font-weight-bold">
                {title}
              </h5>
            }

            {(description) &&
              <p className="text-body text-sm">{description}</p>
            }

            {(price) &&
              <p className="mb-0 text-lg text-body mt-1 mb-3">
                <strong>${formattedPrice}</strong>
              </p>
            }

            {(colors) &&
              <ProductBadge colors={colors} />
            }

            {!(description || colors || color) &&
              <a href="#" className="font-weight-normal text-body text-sm">Shop Now</a>
            }
          </div>
        </a>
      </div>
    </>
  );
};
